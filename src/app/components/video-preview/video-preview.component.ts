import {Component, Input} from '@angular/core';
import {routes} from "../../constants/routes";

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

  public routes = routes;
}
