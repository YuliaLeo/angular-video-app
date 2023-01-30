import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDashboardComponent } from './components/video-dashboard/video-dashboard.component';

const routes: Routes = [
	{ path: '', redirectTo: '/videos', pathMatch: 'full' },
	{ path: 'videos', component: VideoDashboardComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }