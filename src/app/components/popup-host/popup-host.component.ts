import {
  Component,
  TemplateRef,
  Input,
  ViewChild,
  ViewContainerRef,
  OnChanges,
  SimpleChanges, HostBinding
} from '@angular/core';

@Component({
  selector: 'app-popup-host',
  templateUrl: './popup-host.component.html',
  styleUrls: ['./popup-host.component.scss']
})
export class PopupHostComponent implements OnChanges {
  @Input()
  public template: TemplateRef<unknown> | undefined;

  @ViewChild('templateContainer', { static: true, read: ViewContainerRef })
  private _viewportContainer!: ViewContainerRef;

  @HostBinding('class.empty')
  isEmpty = true;

  public ngOnChanges({template} : SimpleChanges) {
    if (template) {
      this.insertTemplate(this.template);
    }
  }

  private insertTemplate(template: TemplateRef<unknown> | undefined) {
    if (!this.isEmpty) {
      this._viewportContainer.clear();
    }

    if (template) {
      this._viewportContainer.createEmbeddedView(template);
    }

    this.isEmpty = !this._viewportContainer.length;
  }
}
