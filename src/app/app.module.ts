import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { SearchComponent } from './components/search/search.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { VideoDashboardComponent } from './components/video-dashboard/video-dashboard.component';
import { LoadingDirective } from './directives/loading.directive';
import { PopupHostComponent } from './components/popup-host/popup-host.component';
import { PaginationDirective } from './directives/pagination.directive';

@NgModule({
  declarations: [
    AppComponent,
    VideoPreviewComponent,
    SearchComponent,
    VideoPageComponent,
    VideoDashboardComponent,
    LoadingDirective,
    PaginationDirective,
    PopupHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
