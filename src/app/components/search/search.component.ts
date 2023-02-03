import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() searchEmitted: EventEmitter<string> = new EventEmitter<string>();

  public searchControl: FormControl<string> = new FormControl<string>('', {nonNullable: true});

  private _sub: Subscription = Subscription.EMPTY;

  // Когда используешь функции life cycle не забывай добавлять что реализуешь какой-то интерфейс
  public ngOnInit(): void {
    // Вот как раз пример с отпиской
    this._sub = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((inputValue) => {
      this.searchEmitted.emit(inputValue);
    })
  }

  public ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
