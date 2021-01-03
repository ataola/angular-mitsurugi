import { Component, OnInit } from '@angular/core';

import { today_news, yesterday_news } from '../../mocks/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	today_news: object[] = today_news;
	yesterday_news: object[] = yesterday_news;
	news = {
		today: today_news,
		yesterday: yesterday_news
	}
	status: string = 'today';
  constructor() { }

  ngOnInit() {
	}

	pong() {
		window.alert('pong');
	}

	getTodayNews() {
		this.status = 'today';
	}

	getYesterdayNews() {
		this.status = 'yesterday';
	}

}
