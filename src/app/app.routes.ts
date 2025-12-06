import { Routes, provideRouter, withInMemoryScrolling, withViewTransitions, withRouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { UniversoComponent } from './views/universo/universo.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';
import { PodcastComponent } from './views/podcast/podcast.component';

export const routes: Routes = [
    { path: 'app', component: NosotrosComponent },
    { path: 'universo', component:  UniversoComponent },
    { path: 'portafolio', component:  PortafolioComponent },
    { path: 'podcast', component:  PodcastComponent },
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: '**', redirectTo: '/app' } // Redirect any unknown paths to home
];

// Custom scroll behavior function
type EasingFunction = (t: number, b: number, c: number, d: number) => number;

const smoothScroll = (position: number): void => {
    const start = window.pageYOffset;
    const distance = position - start;
    const duration = 800; // milliseconds
    let startTime: number;

    const easeInOutQuad: EasingFunction = (t: number, b: number, c: number, d: number) => {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    const animation = (currentTime: number): void => {
        if (startTime === undefined) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            window.requestAnimationFrame(animation);
        }
    };

    window.requestAnimationFrame(animation);
};

// Add smooth scrolling behavior to the HTML element
if (typeof document !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';

    // Override default scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent): void => {
        const target = e.currentTarget as HTMLAnchorElement;
        const targetId = target.getAttribute('href');
        
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const headerOffset = 80; // Adjust this value based on your header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            smoothScroll(offsetPosition);
            
            // Update URL without triggering a page reload
            window.history.pushState(null, '', targetId);
        }
    };

    // Apply to existing anchor links
    const applySmoothScrolling = (): void => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            // Cast the event listener to EventListener to match the expected type
            const clickListener = handleAnchorClick as unknown as EventListener;
            anchor.removeEventListener('click', clickListener);
            anchor.addEventListener('click', clickListener);
        });
    };

    // Initial application
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applySmoothScrolling);
    } else {
        applySmoothScrolling();
    }
}

export const appRoutingProviders = [
    provideRouter(
        routes,
        withInMemoryScrolling({
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        }),
        withViewTransitions(),
        withRouterConfig({
            onSameUrlNavigation: 'reload',
            paramsInheritanceStrategy: 'always',
        })
    )
];
