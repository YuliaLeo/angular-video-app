import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IVideo } from '../types/Video';
import { IResponse } from '../types/VideoResponse';

@Injectable({
	providedIn: 'root'
})
export class VideoService {
	// это нормально так собирать ссылку?
	private videosUrl = 'https://youtube.googleapis.com/youtube/v3/videos';
	private part = 'snippet';
	private chart = 'mostPopular';
	private apiKey = 'AIzaSyAGbTOEseMlTZ91Oz1q9Rh3vWxMoYiZADE';
	private videoSource = `${this.videosUrl}?part=${this.part}&chart=${this.chart}&key=${this.apiKey}`;

	videos: IVideo[] = [];

	constructor(private http: HttpClient) {
	}

	getVideos(): Observable<IVideo[]> {
		return this.http.get<IResponse>(this.videoSource)
			.pipe(map((response) => this.videos = response.items))
	}
}