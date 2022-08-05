import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Finonex';

  constructor(private service: AppServiceService) {}
  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.service.getPosts().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
