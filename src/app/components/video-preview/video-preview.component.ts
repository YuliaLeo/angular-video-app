import { Component, Input } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
	selector: 'app-video-preview',
	templateUrl: './video-preview.component.html',
	styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent {
	@Input() title: string = '';
	@Input() date: string = '';
	@Input() imageUrl: string = '';
	@Input() id: string = '';

	constructor(private _routesService: RoutesService) {
	}

	public router = this._routesService.routes;
}