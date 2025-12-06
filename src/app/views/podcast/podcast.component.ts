import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MainMenuComponent } from '../../shared/main-menu/main-menu.component';
import { ScrollingComponent } from '../../shared/scrolling/scrolling.component';
import { FooterComponent } from '../../shared/footer/footer.component';

// Declare Spotify SDK types
declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [
    CommonModule,
    MainMenuComponent,
    ScrollingComponent,
    FooterComponent
  ],
  template: `
    <app-main-menu></app-main-menu>
    <div class="min-h-[100vh] bg-black pr-[15%] pl-[15%]">
      <h1 class="text-[3.5vw] pt-[6vw] pb-[3vw] font-[posterama-semibold] text-center text-[var(--orange-primary)]">
        PODCASTS
      </h1>
      <div class="flex items-center justify-center pb-[3vw]">
        <div class="w-[2px] h-[10px] bg-[var(--orange-primary)]"></div>
        <hr size="1px" style="color: var(--orange-primary);" class="w-[100%]" />
        <div class="w-[2px] h-[10px] bg-[var(--orange-primary)]"></div>
      </div>

      <div class="spotify-container">
        <iframe 
          [src]="getSafeUrl()"
          style="border-radius:12px; width: 100%; height: 500px;"
          frameborder="0" 
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>

      <div class="flex items-center justify-center pt-[3vw] pb-[3vw]">
        <div class="w-[2px] h-[10px] bg-[var(--orange-primary)]"></div>
        <hr size="1px" style="color: var(--orange-primary);" class="w-[100%]" />
        <div class="w-[2px] h-[10px] bg-[var(--orange-primary)]"></div>
      </div>
    </div>
    <app-scrolling></app-scrolling>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class PodcastComponent implements AfterViewInit {
  spotifyUrl = 'https://open.spotify.com/embed/playlist/1zf1T5kyEhjtfKXYAVNVvu?utm_source=generator';
  
  constructor(private sanitizer: DomSanitizer) {}
  
  ngAfterViewInit() {
    this.loadSpotifySDK();
  }
  
  getSafeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyUrl);
  }
  
  private loadSpotifySDK() {
    // Load the Spotify Web Playback SDK
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    
    // Set up the global callback for when the SDK is ready
    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log('Spotify Web Playback SDK ready');
      // You can initialize the player here if needed
      // const player = new Spotify.Player({
      //   name: 'Your App Name',
      //   getOAuthToken: cb => { /* Your OAuth token logic */ },
      //   volume: 0.5
      // });
    };
    
    document.body.appendChild(script);
  }
}
