import {TestBed} from '@angular/core/testing';
import {VideoService} from './video.service';
import {RestService} from "./rest.service";
import {IVideo} from "../types/Video";
import {of} from "rxjs";
import {ContentKind} from "../types/ContentKinds";
import {IVideoResponse} from "../types/VideoResponse";

describe('VideoService', () => {
	let service: VideoService;
  const fakeRestService = jasmine.createSpyObj(['restGET']);

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [VideoService,
        { provide: RestService, useValue: fakeRestService }]
		});
		service = TestBed.inject(VideoService);
	});

	it('should get an array of videos when no title for search is specified', () => {
    const videosArray: IVideo[] = [
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
    const videosResponse: IVideoResponse = {
      kind: ContentKind.videoList,
      etag: "some etag",
      items: videosArray,
      pageInfo: {
        totalResults: 100,
        resultsPerPage: 10
      }
    };

    fakeRestService.restGET.and.returnValue(of(videosResponse));

    service.getVideos().subscribe(res => expect(res).toEqual(videosArray));
	});

  it('should get an array of videos when some title for search is specified', () => {
    const videosArray: IVideo[] = [
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
    const videosResArray: IVideo[] = [
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
      }
    ];
    const videosResponse: IVideoResponse = {
      kind: ContentKind.videoList,
      etag: "some etag",
      items: videosArray,
      pageInfo: {
        totalResults: 100,
        resultsPerPage: 10
      }
    };

    fakeRestService.restGET.and.returnValue(of(videosResponse));

    service.getVideos("scream").subscribe(res => expect(res).toEqual(videosResArray));
  });

  it('should get one video using an id parameter', () => {
    const video: IVideo = {
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
      };
    const videoResponse: IVideoResponse = {
      kind: ContentKind.videoList,
      etag: "some etag",
      items: [video],
      pageInfo: {
        totalResults: 100,
        resultsPerPage: 10
      }
    };

    fakeRestService.restGET.and.returnValue(of(videoResponse));

    service.getVideo(video.id).subscribe(res => expect(res).toEqual(video));
  });
});
