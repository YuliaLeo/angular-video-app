import {Injectable} from '@angular/core'
import {AppRoutes} from '../types/AppRoutes'
import {IRouter} from "../types/Router";

export const toVideos = [`/${AppRoutes.Videos}`];

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  constructor() {
  }

  public get routes(): IRouter {
    return {
      videos: {
        id: (id: string) => [...toVideos, id]
      }
    }
  }
}
