import { Injectable, OnDestroy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const enum Sex {
	female = 0,
	male = 1
}

const FETCH_LATENCY = 500;

export class User {

	constructor(public id: number, public name: string, public age: number, public sex: Sex, public hobby: string[]) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.hobby = hobby;
	}
}

const Users: User[] = [
	new User(1, '李雷', 20, 1, ['reading', 'writing']),
	new User(2, '韩梅梅', 19, 0, ['piano', 'football']),
	new User(3, '郭靖', 30, 1, ['gongfu', 'singing']),
	new User(4, '黄蓉', 29, 0, ['cooking', 'dancing']),
];

@Injectable()
export class UserService implements OnDestroy {
	constructor() {}
	ngOnDestroy() {}

	get(id: number): Observable<User>{
		const user = of(Users.find(user => user.id === +id));
		return user.pipe(delay(FETCH_LATENCY));
	}

	getAll(): Observable<User[]> {
		return of(Users).pipe(delay(FETCH_LATENCY));
	}

	add(name: string, age: number, sex: Sex, hobby: string[]): Observable<User>{
		const id_last = Users[Users.length -1].id;
		const id = id_last + 1;
		const user = new User(id, name, age, sex, hobby);
		Users.push(user);
		return of(user).pipe(delay(FETCH_LATENCY));
	}

	delete(id: number): Observable<User>{
		const idx = Users.map(user => user.id).indexOf(id);
		const user = of(Users.splice(idx, 1)[0]);
		return user.pipe(delay(FETCH_LATENCY));
	}
}
