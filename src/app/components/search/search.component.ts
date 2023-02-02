import { Component, Output, EventEmitter } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap, Observable } from "rxjs";
import { VideoService } from 'src/app/services/video.service';
import { IVideo } from 'src/app/types/Video';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {
	@Output() videos$ = new EventEmitter<Observable<IVideo[]>>();

	constructor(private videoService: VideoService) { }

	searchTerms = new Subject<string>();

	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.videos$.emit(this.searchTerms.pipe(
			debounceTime(300),
			distinctUntilChanged(),
			switchMap((term: string) => this.videoService.getVideos(term)),
		));
	}
}