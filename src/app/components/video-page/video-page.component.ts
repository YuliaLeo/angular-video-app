import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VideoService} from 'src/app/services/video.service';
import {IVideo} from 'src/app/types/video';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {finalize, Subscription} from "rxjs";

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit, OnDestroy {
  public video?: IVideo;
  public safeUrl!: SafeResourceUrl;
  public loading = false;
  private _sub: Subscription =  Subscription.EMPTY;

  constructor(
    private _route: ActivatedRoute,
    private _videoService: VideoService,
    private _sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.getVideo();
  }

  public get youtubeLink() {
    return 'https://www.youtube.com/embed/';
  }

  getVideo(): void {
    const id = this._route.snapshot.paramMap.get('id')!;
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.youtubeLink + id);
    this.loading = true;
    this._sub = this._videoService.getVideo(id)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(video => {
        this.video = video;
      });
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
