import {AppRoutes} from "../types/app-routes";
const toVideos = [`/${AppRoutes.Videos}`];
export const routes = {
  videos: {
    id: (id: string) => [...toVideos, id]
  }
}
