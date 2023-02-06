import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {IVideo} from '../types/Video';
import {IListItem} from '../types/ListItem';
import {RestService} from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public get apiUrl() {
    return 'https://youtube.googleapis.com/youtube/v3/videos';
  }

  constructor(
    private _restService: RestService
  ) {
  }

  public getVideos(term: string = ''): Observable<IVideo[]> {
    const paramsData: IListItem[] = [
      {
        name: 'part',
        value: 'snippet'
      },
      {
        name: 'chart',
        value: 'mostPopular'
      },
      {
        name: 'key',
        value: 'AIzaSyAGbTOEseMlTZ91Oz1q9Rh3vWxMoYiZADE'
      },
      {
        name: 'maxResults',
        value: 12
      },
    ]

    // По-хорошему поиск по имени реализовывается на беке. То есть ты отправляешь searchParam
    // А бек тебе возвращает нужный респонс. Поскольку ютуб такой фичи не реализовал (ну либо мы просто не нашли)
    // Оставим текущий вариант, просто имей в виду, что в общем он должен быть реализован по-другому
    return this._restService.restGET(this.apiUrl, paramsData)
      .pipe(
        map(response => response.items
          .filter((item: IVideo) => {
            if (!term) {
              return true;
            }

            return item.snippet.title.toLowerCase().includes(term);
          }))
      );
  }

  public getVideo(id: string): Observable<IVideo> {
    const paramsData: IListItem[] = [
      {
        name: 'part',
        value: 'snippet'
      },
      {
        name: 'key',
        value: 'AIzaSyAGbTOEseMlTZ91Oz1q9Rh3vWxMoYiZADE'
      },
      {
        name: 'id',
        value: id
      }
    ]
    return this._restService.restGET(this.apiUrl, paramsData)
      .pipe(
        map(response => response.items[0])
      );
  }
}
