import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IVideo } from 'src/app/types/Video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  public videos$: Observable<IVideo[]> = of([]);
  // Добавь переменную loading которая будет true когда происходить какая-нибудь загрузка с сервера и false когда нет
  // на основе этой переменной юзеру будет показываться что сейчас идёт загрузка данных (спиннер загрузки или что угодно другое)
  // Это очень важно с точки зрения UX, чтобы юзер видел, что на его действие есть какой-то отклик и что-то происходит

  constructor(
    private _videoService: VideoService
  ) {
  }

  ngOnInit(): void {
    this.videos$ = this._videoService.getVideos();
    // Твой вариант тоже правильный, просто в таком случае:
    // 1. Пишется больше кода
    // 2. Придется отписываться от подписки, во избежания утечек памяти
    // this.videoService.getVideos('').subscribe(videos => this.videos = videos);
  }

  updateVideos(searchSting: string) {
    this.videos$ = this._videoService.getVideos(searchSting);
  }
}
