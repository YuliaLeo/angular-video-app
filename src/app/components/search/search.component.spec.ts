import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SearchComponent} from './search.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit a value when the input value changes after 300ms', fakeAsync(() => {
    const event = spyOn(component.searchEmitted, "emit");
    component.searchControl.setValue("string")
    tick(300);
    expect(event).toHaveBeenCalledWith("string");
  }));
});
