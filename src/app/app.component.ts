import { Component, OnInit } from '@angular/core';
import { VideoService } from './services/video.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(public videoService: VideoService) {
	}

	ngOnInit(): void {
		this.videoService.getVideos().subscribe();
	}
}