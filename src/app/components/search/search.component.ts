import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from "rxjs";
import { VideoService } from 'src/app/services/video.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {

	constructor(private videoService: VideoService) { }

	searchTerms = new Subject<string>();

	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.searchTerms.pipe(
			debounceTime(300),
			distinctUntilChanged(),
			switchMap((term: string) => this.videoService.searchVideos(term)),
		).subscribe();
	}
}