import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject, switchMap, tap} from 'rxjs';
import {IVideo} from 'src/app/types/Video';
import {VideoService} from '../../services/video.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  public videos$: Observable<IVideo[]> = of([]);

  private _dataRequested: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public loading = true;

  constructor(
    private _videoService: VideoService
  ) {
  }

  ngOnInit(): void {
    this.videos$ = this._dataRequested.pipe(
      switchMap((searchTerm) => this._videoService.getVideos(searchTerm)),
      tap(()=> this.loading = false)
    )
    // Твой вариант тоже правильный, просто в таком случае:
    // 1. Пишется больше кода
    // 2. Придется отписываться от подписки, во избежания утечек памяти
    // this.videoService.getVideos('').subscribe(videos => this.videos = videos);
  }

  updateVideos(searchSting: string) {
    this._dataRequested.next(searchSting)
  }
}
