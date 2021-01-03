import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from './users.service';

@Component({
	template: `<h2 hignlight>用户详情</h2>
		<div *ngIf="user">
			<div>User Id: {{ user.id }}</div>
			<div>User Age: {{ user.age }}</div>
			<div>User Sex: {{ user.sex }}</div>
			<div>User Hobby:</div>
			<div *ngFor="let hobby of user.hobby">{{ hobby }}</div>
		</div>
		<br/>
		<a routerLink="../list">返回用户列表</a>`
})

export class UsersDetailComponent implements OnInit {
	user: User;
	Sex: {} = { 0: 'female', 1: 'male' };
	constructor(private route: ActivatedRoute, private userService: UserService) {}
	ngOnInit() {
		const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
		this.userService.get(id).subscribe(user => {
			let { sex, ...others } = user;
			sex = this.Sex[sex];
			this.user = {
				sex,
				...others
			}
		});
	}
}
