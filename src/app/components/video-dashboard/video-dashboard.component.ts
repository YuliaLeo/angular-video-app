import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
    private _videoService: VideoService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.videos$ = this._dataRequested.pipe(
      switchMap((searchTerm) => this._videoService.getVideos(searchTerm)),
      // Я думаю в данном компоненте loading не нужен, достаточно в VideoPageComponent.

      // Если тебе приходится руками вызывать change detection, это значит, что ты где-то свернула не туда (в 99% случаев).
      // В данном случае у тебя нет необходимости в нем, ибо ангуляр сам всё сделает.
      // Когда в _dataRequested придет значение автоматически вызовется switchMap и тп, после чего videos$ Обновится и
      // новые значения попадут в template

      tap(() => this.loading = false),
      finalize(() => this.loading = false),
      tap(() => this._cdr.detectChanges()),
    );
  }

  updateVideos(searchSting: string) {
    this.loading = true;
    this._dataRequested.next(searchSting);
  }
}
