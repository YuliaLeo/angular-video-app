import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDashboardComponent } from './components/video-dashboard/video-dashboard.component';
import { VideoPageComponent } from './components/video-page/video-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/videos', pathMatch: 'full' },
  // В проекте лучше стараться по минимум оставлять голые строки.
  // Например, можно вынести все роуты (в данном случае у тебя только videos) в enum (например AppRoutes)
  // и использовать везде где нужно (AppRoutes.Videos) так шанс опечатки которая всё поломает значительно понижается
	{ path: 'videos', component: VideoDashboardComponent },
	{ path: 'videos/:id', component: VideoPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
