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
  photos = [];

  ngOnInit() {
    this.getTopTenPosts();
    this.getTopTenPhotos();
  }

  getTopTenPosts() {
    this.service.getPosts().subscribe(
      (response) => {
        this.posts = JSON.parse(JSON.stringify(response));
        this.posts = this.posts.slice(0, 10);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTopTenPhotos() {
    this.service.getPhotos().subscribe(
      (response) => {
        this.photos = JSON.parse(JSON.stringify(response));
        this.photos = this.photos.slice(0, 10);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
