import { Component, OnInit } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  imports: [Menubar, CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[] = [];
  showSplash = true;
  isAnimatingOut = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Nosotros',
        routerLink: '/app'
      },
      {
        label: 'Universo',
        routerLink: '/universo' 
      },
      {
        label: 'Portafolio',
        routerLink: '/portafolio' 
      },
      {
        label: 'Proyectos',
        routerLink: '/portafolio',
        fragment: 'projectos'
      },
      {
        label: 'Podcasts',
        routerLink: '/podcast'
      }
    ];

    // Iniciar animación de salida después de 2.5 segundos
    setTimeout(() => {
      this.isAnimatingOut = true;
    }, 2500);

    // Ocultar splash después de 3 segundos
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }
}