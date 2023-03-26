import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './pages/image-gallery/image-gallery.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ImageGalleryComponent
  ],
  exports: [
    NavbarComponent,
    ImageGalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
