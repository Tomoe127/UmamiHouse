import { Component, ElementRef, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Review {
  comment: string;
  name: string;
}

@Component({
  selector: 'app-comentario',
  imports: [],
  templateUrl: './comentario.html',
  styleUrl: './comentario.css',
})
export class Comentario implements OnInit, OnDestroy {
  reviewEmbla = viewChild.required<ElementRef>('reviewEmbla');

  private emblaApi: EmblaCarouselType | null = null;
  selectedIndex = signal(0);

  reviews = signal<Review[]>([
    {
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatem? Excepturi dignissimos quam necessitatibus corporis.',
      name: 'Jane Doe'
    },
    {
      comment: 'Exceptional service and amazing atmosphere! The coffee here is simply the best I have ever tasted. Highly recommended!',
      name: 'John Smith'
    },
    {
      comment: 'A hidden gem in the city. The baristas are true artists and the ambiance is perfect for working or relaxing.',
      name: 'Maria Garcia'
    }
  ]);

  ngOnInit(): void {
    this.initCarousel();
  }

  ngOnDestroy(): void {
    if (this.emblaApi) {
      this.emblaApi.destroy();
    }
  }

  private initCarousel(): void {
    const autoplayOptions = {
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    };

    this.emblaApi = EmblaCarousel(
      this.reviewEmbla().nativeElement,
      {
        loop: true,
        align: 'center',
        slidesToScroll: 1,
        dragFree: false,
        containScroll: 'trimSnaps'
      },
      [Autoplay(autoplayOptions)]
    );

    this.emblaApi.on('select', () => {
      if (this.emblaApi) {
        this.selectedIndex.set(this.emblaApi.selectedScrollSnap());
      }
    });
  }

  scrollToSlide(index: number): void {
    if (this.emblaApi) {
      this.emblaApi.scrollTo(index);
    }
  }

}
