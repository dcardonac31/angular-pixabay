import { Component, Input } from '@angular/core';
import { PixabayData } from 'src/app/pixabay/interfaces/pixabayResponse';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
@Input()  pixabayData: PixabayData[] = []
}
