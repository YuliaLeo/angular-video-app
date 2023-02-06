import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoPreviewComponent} from './video-preview.component';
import {RoutesService} from "../../services/routes.service";
import {AppRoutingModule} from "../../app-routing.module";

describe('VideoPreviewComponent', () => {
  let component: VideoPreviewComponent;
  let fixture: ComponentFixture<VideoPreviewComponent>;

  const fakeRouterService = jasmine.createSpyObj("fakeRouterService", [], ["routes"]);
  const routes = {
    videos: {
      id: (id = '1') => [id]
    }
  };
  //@ts-ignore
  Object.getOwnPropertyDescriptor(fakeRouterService, "routes").get.and.returnValue(routes);

  beforeEach(async () => {
    TestBed.overrideComponent(VideoPreviewComponent, {
        set: {
          providers: [
            {provide: RoutesService, useValue: fakeRouterService}
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
    fixture.detectChanges();
  });

  it('should get routes from routesService', () => {
    expect(component.router).toEqual(routes);
  });
});
