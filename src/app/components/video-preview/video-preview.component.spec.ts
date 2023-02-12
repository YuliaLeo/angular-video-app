import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoPreviewComponent} from './video-preview.component';
import {AppRoutingModule} from "../../app-routing.module";

describe('VideoPreviewComponent', () => {
  let component: VideoPreviewComponent;
  let fixture: ComponentFixture<VideoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoPreviewComponent],
      imports: [AppRoutingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});
