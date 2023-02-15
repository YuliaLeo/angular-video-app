import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, finalize, Observable, of, switchMap, tap} from 'rxjs';
import {IVideo} from 'src/app/types/video';
import {VideoService} from '../../services/video.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  public videos$: Observable<IVideo[]> = of([]);
  private _dataRequested: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public loading = false;

  constructor(
    private _videoService: VideoService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.videos$ = this._dataRequested.pipe(
      switchMap((searchTerm) => this._videoService.getVideos(searchTerm)),
      // Я думаю в данном компоненте loading не нужен, достаточно в VideoPageComponent.
      tap(() => this.loading = false),
      finalize(() => this.loading = false),
    );
  }

  updateVideos(searchSting: string) {
    this.loading = true;
    this._dataRequested.next(searchSting);
  }
}
