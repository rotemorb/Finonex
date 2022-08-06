import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsServiceService {
  constructor(private http: HttpClient) {}

  rootURL = '/api';

  getPhotos() {
    return this.http.get(this.rootURL + '/photos');
  }
}
