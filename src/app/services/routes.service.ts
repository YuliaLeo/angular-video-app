import {Injectable} from '@angular/core'
import {AppRoutes} from '../types/AppRoutes'

export const toVideos = [`/${AppRoutes.Videos}`];

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  constructor() {
  }

  get routes() {
    return {
      videos: {
        id: (id: string) => [...toVideos, id]
      }
    }
  }
}
