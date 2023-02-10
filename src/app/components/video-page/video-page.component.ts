import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VideoService} from 'src/app/services/video.service';
import {IVideo} from 'src/app/types/video';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {tap} from "rxjs";

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  video?: IVideo;
  safeUrl!: SafeResourceUrl;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.getVideo();
  }

  public get youtubeLink() {
    return 'https://www.youtube.com/embed/';
  }

  getVideo(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    // 1. Если делаешь subscribe, то нужно делать unsubscribe, иначе могут быть утечки памяти (конкретно тут их не будет по некоторым причинам),
    // это я скорее на будущее говорю, что об этом не стоит забывать. Можешь почитать про утечки памяти в rxjs/ангуляр. Докладов и статей на эту тему много
    this.videoService.getVideo(id)
      .pipe(
        // писал по этому поводу. В начале метода getVideo делаешь loading = true, а в finalize - false
        tap(() => this.loading = false)
      )
      .subscribe(video => {
        this.video = video;
        // safeurl не зависит от результата выполнения getVideo, соответственно можно просто вынести из subscribe
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeLink + id);
      });
  }
}
