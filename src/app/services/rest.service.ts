import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IListItem } from '../types/ListItem';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(
    private _http: HttpClient,
  ) {
  }

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
