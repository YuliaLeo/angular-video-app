import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IListItem} from '../types/ListItem';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(
    private _http: HttpClient,
  ) {
  }

  // Это мой код, но всё же
  // Возвращаемый тип можно определить при помощи дженерика.
  // В идеале, нужно стараться избавляться от any, но если без него никак, то можно использовать unknown тип
  // https://www.google.com/search?q=unknown+instead+of+any&oq=unkniwn+instad&aqs=chrome.1.69i57j0i13i512j0i8i13i30i625l2j0i8i13i15i30i625j0i390l4.7531j0j7&sourceid=chrome&ie=UTF-8
  // Можешь почитать когда нечего делать будет
  public restGET(endpoint: string, paramsData: IListItem[] = []): Observable<any> {
    let params = new HttpParams();

    paramsData.map((param: IListItem) => {
      if (param) {
        params = params.set(param.name, param.value);
      }
    });

    const options = {
      params
    };

    return this._http.get(endpoint, options);
  }
}
