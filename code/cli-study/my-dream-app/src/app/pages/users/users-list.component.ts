import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from './users.service';

@Component ({
	template: `<h2>用户列表</h2>
		<div *ngFor='let user of users | async'>
			<a routerLink="{{ '../' + user.id }}">{{ user.id }} - {{ user.name }}</a>
		</div>
		<div><a routerLink="../add">新增用户</a></div>`
})

export class UsersListComponent {
	users: Observable<User[]>;
	constructor(private userService: UserService) {
		this.users = this.userService.getAll();
	}
}
