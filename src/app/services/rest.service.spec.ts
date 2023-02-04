import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestService } from "./rest.service";
import { HttpParams } from "@angular/common/http";

describe('RestService', () => {
  let service: RestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestService]
    });
    service = TestBed.inject(RestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve data from a specified URL without any params via GET', () => {
    const mockData = [
      {id: 1, title: "Mock title", body: "Mock content 1"},
      {id: 2, title: "Mock title 2", body: "Mock content 2"}
    ];
    const mockServer = 'mockserver.com';

    service.restGET(mockServer).subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const request = httpMock.expectOne(mockServer);

    expect(request.request.method).toBe("GET");

    request.flush(mockData);
  });

  it('should retrieve data from a specified URL with params via GET', () => {
    const mockData: any = [
      {id: 1, title: "Mock title", body: "Mock content 1"},
      {id: 2, title: "Mock title 2", body: "Mock content 2"}
    ];
    const mockServer = 'mockserver.com';
    const mockParams = [
      {
        name: 'part',
        value: 'snippet'
      },
      {
        name: 'chart',
        value: 'mostPopular'
      },
      {
        name: 'maxResults',
        value: 12
      }
    ];
    let mockHttpParams = new HttpParams();
    mockParams.map(param =>
      mockHttpParams = mockHttpParams.set(param.name, param.value)
    );

    service.restGET(mockServer, mockParams).subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const request = httpMock.expectOne(mockServer + '?' + mockHttpParams);
    expect(request.request.method).toBe("GET");
    request.flush(mockData);
  });
});
