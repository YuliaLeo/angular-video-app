import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPreviewComponent } from './video-preview.component';
import { RoutesService } from "../../services/routes.service";
import { AppRoutingModule } from "../../app-routing.module";

describe('VideoPreviewComponent', () => {
  let component: VideoPreviewComponent;
  let fixture: ComponentFixture<VideoPreviewComponent>;

  const fakeRouterService = jasmine.createSpy();

  beforeEach(async () => {
    TestBed.overrideComponent(VideoPreviewComponent, {
        set: {
          providers: [
            { provide: RoutesService, useValue: fakeRouterService }
          ]
        }
      }
    );
    await TestBed.configureTestingModule({
      declarations: [VideoPreviewComponent],
      imports: [AppRoutingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPreviewComponent);
    component = fixture.componentInstance;
    component.router = {
      videos: {
         id: () => ["1"]
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
