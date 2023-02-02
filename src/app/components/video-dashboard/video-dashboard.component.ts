import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
	selector: 'app-video-dashboard',
	templateUrl: './video-dashboard.component.html',
	styleUrls: ['./video-dashboard.component.scss']
})

export class VideoDashboardComponent implements OnInit {
	constructor(public videoService: VideoService) {
	}

	ngOnInit(): void {
		this.videoService.getVideos().subscribe();
	}
}