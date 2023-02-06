import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {VideoService} from 'src/app/services/video.service';
import {VideoDashboardComponent} from './video-dashboard.component';

describe('VideoDashboardComponent', () => {
  let component: VideoDashboardComponent;
  let fixture: ComponentFixture<VideoDashboardComponent>;

  const fakeVideoService = jasmine.createSpyObj("fakeVidService", ["getVideos", "getVideo"], ["apiUrl"]);

  beforeEach(async () => {
    TestBed.overrideComponent(VideoDashboardComponent, {
        set: {
          providers: [
            {provide: VideoService, useValue: fakeVideoService}
          ]
        }
      }
    );
    await TestBed.configureTestingModule({
      declarations: [VideoDashboardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
