import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from './gallery-service.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor(private service: GalleryServiceService) {}
  photos = [];
  singlePhoto: any = [];
  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.service.getPhotos().subscribe(
      (response) => {
        this.photos = JSON.parse(JSON.stringify(response));
        this.photos = this.photos.slice(0, 5); //I've limited the number of photos, as the thumbnails does not work
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPhotoById(id: Number) {
    this.service.getPhotoById(id).subscribe(
      (response) => {
        this.singlePhoto = JSON.parse(JSON.stringify(response));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
