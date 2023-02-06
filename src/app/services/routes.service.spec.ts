import {TestBed} from "@angular/core/testing";
import {RoutesService, toVideos} from "./routes.service";

describe('RoutesService', () => {
  let service: RoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesService]
    });
    service = TestBed.inject(RoutesService);
  });

  it("should create parameters for url with a specified id", () => {
    const result = [...toVideos, '1'];
    expect(service.routes.videos.id('1')).toEqual(result);
  })
});
