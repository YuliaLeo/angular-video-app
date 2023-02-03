import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDashboardComponent } from './components/video-dashboard/video-dashboard.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { AppRoutes } from './types/AppRoutes';

const routes: Routes = [
	{ path: '', redirectTo: AppRoutes.Videos, pathMatch: 'full' },
	{ path: AppRoutes.Videos, component: VideoDashboardComponent },
	{ path: `${AppRoutes.Videos}/:id`, component: VideoPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }