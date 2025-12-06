import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-scrolling',
  imports: [NgIf],
  templateUrl: './scrolling.component.html',
  styleUrl: './scrolling.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ScrollingComponent {
  isVisible: boolean = false;


  @HostListener('window:scroll', [])
    onWindowScroll () {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      this.isVisible = scrollY > 600;
    }

  scrollToTop () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  
}

