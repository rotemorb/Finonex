import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(private http: HttpClient) {}

  rootURL = '/api';

  getPosts() {
    return this.http.get(this.rootURL + '/posts');
  }
}
