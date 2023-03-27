import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Directive({
  selector: '[appPagination]'
})
export class PaginationDirective<T> implements OnInit, OnChanges {
    @Input()
    appPaginationOf: T[] | undefined;

    @Input()
    appPaginationItemsOnPage: number = 1;

    private _groupedItems: T[][] = [];

    private readonly _currentIndex$ = new BehaviorSubject<number>(0);

    constructor(
        private readonly _viewContainerRef: ViewContainerRef,
        private readonly _templateRef: TemplateRef<IPaginationContext<T>>
    ) {
    }

    ngOnChanges({appPaginationOf, appPaginationItemsOnPage}: SimpleChanges) {
        if (!this.appPaginationOf?.length) {
            this._viewContainerRef.clear();

            return;
        }

        this._groupedItems = this._groupItemsIntoArray(this.appPaginationOf, this.appPaginationItemsOnPage);
        this._currentIndex$.next(0);
    }

    ngOnInit() {
        this._listenCurrentIndexChange();
    }

    private _listenCurrentIndexChange() {
        this._currentIndex$
            .pipe(
                map(currentIndex => this._getCurrentContext(currentIndex))
            )
            .subscribe(context => {
                this._viewContainerRef.clear();
                this._viewContainerRef.createEmbeddedView(this._templateRef, context);
            });
    }

    private _getCurrentContext(activeIndex: number): IPaginationContext<T> {
        return {
            $implicit: this._groupedItems[activeIndex],
            appPaginationOf: this.appPaginationOf as T[],
            activeIndex: activeIndex,
            pages: this._groupedItems.map((_, index) => index),
            next: () => {
                this._next()
            },
            previous: () => {
                this._previous()
            },
            getPageByIndex: (index: number) => {
                this._getPageByIndex(index)
            }
        }
    }

    private _groupItemsIntoArray(items: T[], itemsOnPage: number): T[][] {
      const pages = Math.ceil(items.length / itemsOnPage);
      const groupedItems = [];

      for (let page = 0; page < pages; page++) {
          const startIndex = page * itemsOnPage;

          groupedItems.push([]);
          groupedItems[page] = items.slice(startIndex, startIndex + itemsOnPage);
      }

      return groupedItems;
  }

    private _next() {
        const nextValue = this._currentIndex$.value + 1;
        const newIndex = nextValue < this._groupedItems.length ? nextValue : 0;

        this._currentIndex$.next(newIndex);
    }

    private _previous() {
        const prevValue = this._currentIndex$.value - 1;
        const newIndex = prevValue < 0 ? this._groupedItems.length - 1 : prevValue;

        this._currentIndex$.next(newIndex);
    }

    private _getPageByIndex(index: number) {
        this._currentIndex$.next(index);
    }
}

interface IPaginationContext<T> {
  $implicit: T[];
  appPaginationOf: T[];
  activeIndex: number;
  pages: number[];
  next: () => void;
  previous: () => void;
  getPageByIndex: (index: number) => void;
}
