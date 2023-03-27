import {
  Component,
  TemplateRef,
  Input,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'app-popup-host',
  templateUrl: './popup-host.component.html',
  styleUrls: ['./popup-host.component.scss']
})
export class PopupHostComponent {
  @Input()
  public template: TemplateRef<unknown> | null = null;

  @HostBinding('class.empty')
  get isEmpty() {
    return !this.template;
  }
}
