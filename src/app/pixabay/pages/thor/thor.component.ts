import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'appsettings-json-reader';
import { PixabayData } from '../../interfaces/pixabayResponse';
import { PixabayService } from '../../service/pixabay.service';

@Component({
  selector: 'app-thor',
  templateUrl: './thor.component.html',
  styleUrls: ['./thor.component.css']
})
export class ThorComponent  implements OnInit {
  searchTerm = AppSettings.readAppSettings().movies.thor;
  pixabayData: PixabayData[] = []

  constructor(private pixabayService: PixabayService) { }

  ngOnInit(): void {
    this.getAllImagesIronMan();
  }

  getAllImagesIronMan() {
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
