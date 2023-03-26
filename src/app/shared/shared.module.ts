import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './pages/image-gallery/image-gallery.component';
import { BackToTopComponent } from './pages/back-to-top/back-to-top.component';
import { ModalComponent } from './pages/modal/modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ImageGalleryComponent,
    BackToTopComponent,
    ModalComponent
  ],
  exports: [
    NavbarComponent,
    ImageGalleryComponent,
    BackToTopComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
