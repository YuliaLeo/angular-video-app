import {Component, Input, OnInit} from '@angular/core';
import {RoutesService} from 'src/app/services/routes.service';
import {IRouter} from "../../types/Router";

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent implements OnInit {
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() imageUrl: string = '';
  @Input() id: string = '';

  constructor(private _routesService: RoutesService) {
  }

  public router!: IRouter;

  ngOnInit(): void {
    this.router = this._routesService.routes;
  }
}
