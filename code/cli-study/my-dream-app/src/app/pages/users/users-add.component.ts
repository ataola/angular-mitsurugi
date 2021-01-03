import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from './users.service';

@Component({
	template: `<h2>新增用户</h2>
	<div>
		<div>
			姓名：<input class="" value="" type="text"/>
		</div>
		<div>
		  年龄：<input class="" value="" type="text"/>
		</div>
		<div>
			性别：<input type="radio" name="sex" value="1"/>男<input type="radio" name="sex" value="0"/>女
		</div>
		<div>
			爱好：<input class="" value="" type="text"/>
		</div>
		<div><button>保存</button></div>
		<br/>
		<div><a routerLink="../list">返回用户列表</a></div>
	</div>`
})

export class UsersAddComponent {
	constructor() {}
}
