import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, switchMap, tap} from 'rxjs';
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

  // По умолчанию loading должен быть всегда false по умолчанию и становиться true только в случаях когда, например, что-то загружаем с сервера
  public loading = true;

  constructor(
    private _videoService: VideoService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.videos$ = this._dataRequested.pipe(
      switchMap((searchTerm) => this._videoService.getVideos(searchTerm)),
      // tap вызывается только если все, что выше по пайплайну успешно отработало.
      // Соответственно, если _dataRequested или _videoService.getVideos упадут с ошибкой, то у тебя loading будет всегда true
      // Вместо этого всегда используй finalize в конце пайплайна. Он вызывается при ошибке или при успехе
      // https://rxjs.dev/api/operators/finalize
      // Я думаю в данном компоненте loading не нужен, достаточно в VideoPageComponent. А тут просто скрывать
      // сетку видео если нет видео (или показывать что-то вроде "Не нашел видео").
      // Когда будет происходить поиск по названию, у тебя не будет отображаться loading = true, поскольку такое значения у тебя только при инициализации
      tap(() => this.loading = false),
      // Если тебе приходится руками вызывать change detection, это значит, что ты где-то свернула не туда (в 99% случаев).
      // В данном случае у тебя нет необходимости в нем, ибо ангуляр сам всё сделает.
      // Когда в _dataRequested придет значение автоматически вызовется switchMap и тп, после чего videos$ Обновится и
      // новые значения попадут в template
      tap(() =>  this._cdr.detectChanges())
    );
  }

  updateVideos(searchSting: string) {
    this._dataRequested.next(searchSting);
  }
}
