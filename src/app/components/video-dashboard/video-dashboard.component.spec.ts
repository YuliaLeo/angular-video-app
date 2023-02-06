import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {VideoService} from 'src/app/services/video.service';
import {VideoDashboardComponent} from './video-dashboard.component';
import {of} from "rxjs";
import {IVideo} from "../../types/Video";

describe('VideoDashboardComponent', () => {
  let component: VideoDashboardComponent;
  let fixture: ComponentFixture<VideoDashboardComponent>;

  const videos: IVideo[] = [
    {
      kind: 'youtube#video',
      etag: 'kO9EyNuiSEuCw-n77B-5kgJIpNs',
      id: 'G0Cj6tGnaK8',
      snippet: {
        title: "Scream (1996) KILL COUNT: RECOUNT",
        categoryId: "10",
        channelId: "UCz9yS18zJGQObwUL_K-ICnw",
        channelTitle: "KarolGVEVO",
        description: "\"Stream “X SI",
        publishedAt: "2023-02-03T00:00:31Z",
        thumbnails: {
          default: {
            url: "",
            width: 100,
            height: 100
          }
        }
      }
    },
    {
      kind: 'youtube#video',
      etag: 'kO9EyNuiSEuCw-n77B-5kgJIpNs',
      id: 'G0Cj6tGnaK8',
      snippet: {
        title: "KAROL G, Romeo Santos - X SI VOLVEMOS (Visualizer)",
        categoryId: "10",
        channelId: "UCz9yS18zJGQObwUL_K-ICnw",
        channelTitle: "KarolGVEVO",
        description: "\"Stream “X SI",
        publishedAt: "2023-02-03T00:00:31Z",
        thumbnails: {
          default: {
            url: "",
            width: 100,
            height: 100
          }
        }
      }
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoDashboardComponent],
      providers: [
        {provide: VideoService, useValue: {getVideos: () => of(videos)}}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should stop loading when videos have been received', () => {
    expect(component.loading).toEqual(false)
  });
});
