import { Injectable } from '@angular/core'
import { AppRoutes } from '../types/AppRoutes'

const toVideos = [`/${AppRoutes.Videos}`];

@Injectable({
	providedIn: 'root'
})
export class RoutesService {
	constructor() {
	}

	public routes = {
		videos: {
			id: (id: string) => [...toVideos, id]
		}
	}
}