import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Carousel } from '../component/carousel/carousel';

@Component({
  selector: 'app-application',
  imports: [Carousel],
  templateUrl: './application.html',
  styleUrl: './application.css',
})
export class Application {

  showVideoModal = signal(false);
  videoUrl = signal<SafeResourceUrl>('');
  
  youtubeVideoId = 'wcjc7YTkWWI';

  constructor(private sanitizer: DomSanitizer) {}

  openVideoModal(): void {
    const youtubeUrl = `https://www.youtube.com/embed/${this.youtubeVideoId}?autoplay=1`;
    this.videoUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl));
    this.showVideoModal.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeVideoModal(): void {
    this.showVideoModal.set(false);
    this.videoUrl.set('');
    document.body.style.overflow = 'auto';
  }

}
