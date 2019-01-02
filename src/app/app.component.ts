import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  title: string = 'Hello, I am Farid Karami';

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
