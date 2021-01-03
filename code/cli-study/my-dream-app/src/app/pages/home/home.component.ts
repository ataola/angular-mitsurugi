import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sentence: string = 'Technology changes life';
  word: string[] = [];
  order: string = 'right';
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.handleSetence();
    }, 150);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.interval);
  }

  handleSetence() {
    if (this.order === 'right') {
      if (this.sentence.length === 0) {
        this.sentence += this.word.pop();
        this.order = 'left';
      } else {
        this.word.push(this.sentence.substr(-1));
        this.sentence = this.sentence.substring(0, this.sentence.length - 1);
      }
    } else if (this.order === 'left') {
      if (this.word.length === 0) {
        this.word.push(this.sentence.substr(-1));
        this.sentence = this.sentence.substring(0, this.sentence.length - 1);
        this.order = 'right';
      } else {
        this.sentence += this.word.pop();
      }
    }
  }
}
