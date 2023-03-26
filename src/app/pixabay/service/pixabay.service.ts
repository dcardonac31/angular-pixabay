import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'appsettings-json-reader';
import { PixabayResponse } from '../interfaces/pixabayResponse';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  private apiUrl = AppSettings.readAppSettings().pixabaySettings.apiUrl;
  private key = AppSettings.readAppSettings().pixabaySettings.key;
  private order = AppSettings.readAppSettings().pixabaySettings.order;
  private per_page = AppSettings.readAppSettings().pixabaySettings.per_page;
  apiPixabay: string = "";

  constructor(private http: HttpClient) { }

  getAllImages(searchTerm: string){
    this.apiPixabay = this.apiUrl +'?key='+this.key+'&q='+searchTerm+'&order='+this.order+'&per_page='+this.per_page;
    return this.http.get<PixabayResponse>(this.apiPixabay);
  }
}
