import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'appsettings-json-reader';
import { PixabayData } from '../../interfaces/pixabayResponse';
import { PixabayService } from '../../service/pixabay.service';

@Component({
  selector: 'app-iron-man',
  templateUrl: './iron-man.component.html',
  styleUrls: ['./iron-man.component.css']
})
export class IronManComponent  implements OnInit {
  searchTerm = AppSettings.readAppSettings().movies.iron_man;
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

