import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'appsettings-json-reader';
import { PixabayData } from '../../interfaces/pixabayResponse';
import { PixabayService } from '../../service/pixabay.service';

@Component({
  selector: 'app-captain-america',
  templateUrl: './captain-america.component.html',
  styleUrls: ['./captain-america.component.css']
})
export class CaptainAmericaComponent implements OnInit {
  searchTerm = AppSettings.readAppSettings().movies.captain_america;
  pixabayData: PixabayData[] = []

  constructor(private pixabayService: PixabayService) { }

  ngOnInit(): void {
    this.getAllImagesCaptainAmerica();
  }

  getAllImagesCaptainAmerica() {
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
