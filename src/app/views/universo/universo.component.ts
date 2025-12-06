import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from '../../shared/main-menu/main-menu.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ScrollingComponent } from '../../shared/scrolling/scrolling.component';

@Component({
  selector: 'app-universo',
  imports: [CommonModule, MainMenuComponent, FooterComponent, ScrollingComponent],
  templateUrl: './universo.component.html',
  styleUrl: './universo.component.css'
})
export class UniversoComponent {
  isMobile: boolean = false;
  shouldAutoplay: boolean = true;

  constructor() {
    this.checkIfMobile();
  }

  private checkIfMobile(): void {
    // Detectar si es mobile basado en el ancho de la ventana y user agent
    this.isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    this.shouldAutoplay = !this.isMobile;
  }
}
