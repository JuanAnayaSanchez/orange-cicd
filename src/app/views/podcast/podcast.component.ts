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
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.css'
})
export class PodcastComponent implements AfterViewInit {
  spotifyUrl = 'https://open.spotify.com/embed/playlist/1zf1T5kyEhjtfKXYAVNVvu?utm_source=generator';

  constructor(private sanitizer: DomSanitizer) { }

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
