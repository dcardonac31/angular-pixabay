import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'appsettings-json-reader';
import { PixabayService } from '../../service/pixabay.service';
import { PixabayData, PixabayResponse } from '../../interfaces/pixabayResponse';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {
  searchTerm = AppSettings.readAppSettings().movies.avengers;
  pixabayData: PixabayData[] = []

  constructor(private pixabayService: PixabayService) { }

  ngOnInit(): void {
    this.getAllImagesAvengers();
  }

  getAllImagesAvengers() {
    this.pixabayService.getAllImages(this.searchTerm).subscribe({
      next: (response) => {
        this.pixabayData = response.hits;
      },
      error: (error) => {
        this.pixabayData = [];
        console.log(error);

      }
    })
  }

}
