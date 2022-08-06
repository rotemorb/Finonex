import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class GalleryServiceService {
  constructor(private http: HttpClient) {}

  rootURL = '/api';

  getPhotos() {
    return this.http.get(this.rootURL + '/photos');
  }

  getPhotoById(id: Number) {
    return this.http.get(this.rootURL + `/photos/${id}`);
  }
}
