import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IVideo } from '../types/Video';
import { IVideoResponse } from '../types/VideoResponse';

@Injectable({
	providedIn: 'root'
})
export class VideoService {
	private videosUrl = 'https://youtube.googleapis.com/youtube/v3/videos?';
	private searchParamsForMultipleVideos = new URLSearchParams({
		part: 'snippet',
		chart: 'mostPopular',
		key: 'AIzaSyAGbTOEseMlTZ91Oz1q9Rh3vWxMoYiZADE',
		maxResults: '12'
	});
	private searchParamsForOneVideo = new URLSearchParams({
		part: 'snippet',
		key: 'AIzaSyAGbTOEseMlTZ91Oz1q9Rh3vWxMoYiZADE',
	});
	private videosSource = this.videosUrl + this.searchParamsForMultipleVideos.toString();

	videos: IVideo[] = [];

	constructor(private http: HttpClient) {
	}

	getVideos(): Observable<IVideo[]> {
		return this.http.get<IVideoResponse>(this.videosSource)
			.pipe(map(response => this.videos = response.items));
	}

	searchVideos(term: string): Observable<IVideo[]> {
		return this.http.get<IVideoResponse>(this.videosSource)
			.pipe(
				map(response => response.items
					.filter(item => item.snippet.title.toLowerCase().includes(term))),
				map(matchedVideos => this.videos = matchedVideos)
			);
	}

	getVideo(id: string): Observable<IVideo> {
		if (this.searchParamsForOneVideo.get('id')) {
			this.searchParamsForOneVideo.delete('id');
		}
		this.searchParamsForOneVideo.append('id', id);
		return this.http.get<IVideoResponse>(this.videosUrl + this.searchParamsForOneVideo.toString())
			.pipe(map(response => response.items[0]));
	}
}