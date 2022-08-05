import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Finonex';

  constructor(private service: HomeServiceService) {}

  posts = [];

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.service.getPosts().subscribe(
      (response) => {
        this.posts = JSON.parse(JSON.stringify(response));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
