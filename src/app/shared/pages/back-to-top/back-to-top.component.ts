import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent {
  scrollVerticalActive = false;

  constructor() {}

    // Función para verificar el estado del scroll y actualizar la visibilidad del botón
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      this.scrollVerticalActive = window.scrollY > 0;
    }

    scrollToTop() {
      window.scrollTo(0, 0);
    }
}
