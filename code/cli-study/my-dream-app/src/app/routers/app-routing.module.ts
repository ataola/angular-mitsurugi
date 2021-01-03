import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { NewsComponent } from '../pages/news/news.component';
import { XyzComponent } from '../pages/xyz/xyz.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

const routes: Routes = [
	{
		path: '', redirectTo: 'home', pathMatch: 'full'
	},
	{
		path: 'home', component: HomeComponent
	},
	{
		path: 'news', component: NewsComponent
	},
	{
		path: 'xyz', component: XyzComponent
	},
	{
		path: 'users', loadChildren: () => import('../pages/users/users.module').then(user => user.UsersModule)
	},
	{
		path: '**', component: NotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
