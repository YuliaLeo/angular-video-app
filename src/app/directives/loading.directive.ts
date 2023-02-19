import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective implements OnInit {

  private _loading = false;

  private _attached = false;

  private _loadingEl!: HTMLElement;

  @Input()
  public set appLoading(loading: boolean) {
    this._loading = loading;
    this._toggle();
  }

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) {
  }

  public ngOnInit() {
    this._renderer.addClass(this._el.nativeElement, "loading");
    this._loadingEl = this._getHtml();
    this._toggle();
  }

  private _getHtml(): HTMLElement {
    let el = this._renderer.createElement('div');
    el.innerHTML = `<div class="loading__text">Loading...</div>`;
    return el;
  }

  private _toggle() {
    if (!this._loadingEl) {
      return;
    }

    if (this._loading && !this._attached) {
      this._renderer.appendChild(this._el.nativeElement, this._loadingEl);
      this._attached = true;
    } else if (this._attached) {
      this._renderer.removeChild(this._el.nativeElement, this._loadingEl);
      this._attached = false;
    }
  }
}
