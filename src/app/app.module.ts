import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { SearchComponent } from './components/search/search.component';
import { VideoDashboardComponent } from './components/video-dashboard/video-dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		VideoPreviewComponent,
		SearchComponent,
		VideoDashboardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }