import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';
import { Component, ElementRef, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import Autoplay from 'embla-carousel-autoplay';


interface CarouselImage {
  url: string;
  title: string;
}

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit, OnDestroy {

  emblaNode = viewChild.required<ElementRef>('emblaNode');

  private emblaApi: EmblaCarouselType | null = null;

  images = signal<CarouselImage[]>([
    {
      url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=70&fm=webp&fit=crop',
      title: 'Sushi Tradicional'
    },
    {
      url: 'https://images.unsplash.com/photo-1757836631165-a6ba5a55d392?w=600&q=70&fm=webp&fit=crop',
      title: 'Ramen Especial'
    },
    {
      url: 'https://images.unsplash.com/photo-1677743537607-f7fc9273ec4d?w=600&q=70&fm=webp&fit=crop',
      title: 'Tempura Crujiente'
    },
    {
      url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=70&fm=webp&fit=crop',
      title: 'Gyoza Artesanal'
    },
    {
      url: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=600&q=70&fm=webp&fit=crop',
      title: 'Bento Box Deluxe'
    },
    {
      url: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=70&fm=webp&fit=crop',
      title: 'Matcha Premium'
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
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    };

    this.emblaApi = EmblaCarousel(
      this.emblaNode().nativeElement,
      {
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        dragFree: false,
        containScroll: 'trimSnaps',

      },
      [Autoplay(autoplayOptions)]
    );
  }

}
