import { Component, OnInit } from '@angular/core';
import { IVideo } from 'src/app/types/Video';
import { VideoService } from '../../services/video.service';

@Component({
	selector: 'app-video-dashboard',
	templateUrl: './video-dashboard.component.html',
	styleUrls: ['./video-dashboard.component.scss']
})

export class VideoDashboardComponent implements OnInit {
	constructor(public videoService: VideoService) {
	}

	videos: IVideo[] = [];

	ngOnInit(): void {
		this.videoService.getVideos().subscribe(videos => this.videos = videos);
	}
}