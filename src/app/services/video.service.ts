import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IVideo } from '../types/Video';
import { IVideoResponse } from '../types/VideoResponse';
import { ISearchParams } from '../types/SearchParams';

@Injectable({
	providedIn: 'root'
})
export class VideoService {
	private videosUrl = 'https://youtube.googleapis.com/youtube/v3/videos';
	private searchParams: ISearchParams = {
		part: 'snippet',
		chart: 'mostPopular',
		key: 'AIzaSyAGbTOEseMlTZ91Oz1q9Rh3vWxMoYiZADE'
	}
	private searchParamsString = new URLSearchParams(this.searchParams).toString();
	private videosSource = `${this.videosUrl}?${this.searchParamsString}`;

	videos: IVideo[] = [];

	constructor(private http: HttpClient) {
	}

	getVideos(): Observable<IVideo[]> {
		return this.http.get<IVideoResponse>(this.videosSource)
			.pipe(map(response => this.videos = response.items));
	}
}