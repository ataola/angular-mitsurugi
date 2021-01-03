import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list.component';
import { UsersDetailComponent } from './users-detail.component';
import { UsersAddComponent } from './users-add.component';
import { UserService } from './users.service';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
	imports: [CommonModule, UsersRoutingModule],
	declarations: [UsersComponent, UsersDetailComponent, UsersListComponent, UsersAddComponent],
	providers: [ UserService ]
})

export class UsersModule {}
