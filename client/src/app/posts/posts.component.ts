import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from './posts-service.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private service: PostsServiceService) {}
  posts = [];
  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.service.getPhotos().subscribe(
      (response) => {
        this.posts = JSON.parse(JSON.stringify(response));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
