import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';
import { IVideo } from 'src/app/types/Video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-video-page',
	templateUrl: './video-page.component.html',
	styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
	video?: IVideo;
	safeUrl!: SafeResourceUrl;

	constructor(
		private route: ActivatedRoute,
		private videoService: VideoService,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit(): void {
		this.getVideo();
	}

	getVideo(): void {
		const id = this.route.snapshot.paramMap.get('id')!;
		this.videoService.getVideo(id)
			.subscribe(video => {
				this.video = video;
				this.safeUrl = this.sanitizer.
					bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
			});
	}
}