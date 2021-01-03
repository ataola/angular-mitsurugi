import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list.component';
import { UsersDetailComponent } from './users-detail.component';
import { UsersAddComponent } from './users-add.component';

const route: Routes = [
	{ path: '', redirectTo: 'list', pathMatch: 'full' },
	{ path: 'list', component: UsersListComponent },
	{ path: 'add', component: UsersAddComponent },
	{ path: ':id', component: UsersDetailComponent }
];

@NgModule({
	imports: [RouterModule.forChild(route)],
	exports: [RouterModule]
})

export class UsersRoutingModule {}
