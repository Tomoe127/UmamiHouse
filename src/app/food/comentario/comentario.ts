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
      comment: 'La mejor experiencia de comida japonesa que he probado. Cada plato refleja dedicación y autenticidad.',
      name: 'Jane Doe'
    },
    {
      comment: 'Servicio excepcional y un ambiente increíble. El ramen aquí es simplemente el mejor que he probado. ¡Muy recomendado!',
      name: 'John Smith'
    },
    {
      comment: 'Una joya escondida en la ciudad. Los chefs son verdaderos artistas y el ambiente es perfecto para disfrutar en familia.',
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
