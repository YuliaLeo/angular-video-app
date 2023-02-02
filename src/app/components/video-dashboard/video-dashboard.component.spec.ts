import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoService } from 'src/app/services/video.service';
import { of } from "rxjs";
import { VideoDashboardComponent } from './video-dashboard.component';

describe('VideoDashboardComponent', () => {
	let component: VideoDashboardComponent;
	let fixture: ComponentFixture<VideoDashboardComponent>;

	const fakeFirstDependencyService = jasmine.createSpyObj("fakeFirstDep", ["getVideos"]);

	beforeEach(async () => {
		TestBed.overrideComponent(VideoDashboardComponent, {
			set: {
				providers: [
					{ provide: VideoService, useValue: fakeFirstDependencyService }
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
		fakeFirstDependencyService.getVideos.and.returnValue(of([]));
		fixture = TestBed.createComponent(VideoDashboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});