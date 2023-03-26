import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'appsettings-json-reader';
import { PixabayData } from '../../interfaces/pixabayResponse';
import { PixabayService } from '../../service/pixabay.service';

@Component({
  selector: 'app-spiderman',
  templateUrl: './spiderman.component.html',
  styleUrls: ['./spiderman.component.css']
})
export class SpidermanComponent  implements OnInit {
  pixabayData: PixabayData[] = []

  constructor(private pixabayService: PixabayService) { }
  searchTerm = AppSettings.readAppSettings().movies.spiderman;

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
