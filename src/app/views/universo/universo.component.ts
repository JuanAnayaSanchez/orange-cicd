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
}
