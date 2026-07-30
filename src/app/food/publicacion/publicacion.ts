import { Component, signal } from '@angular/core';

interface BlogPost {
  image: string;
  title: string;
  author: string;
  category: string;
  date: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-publicacion',
  imports: [],
  templateUrl: './publicacion.html',
  styleUrl: './publicacion.css',
})
export class Publicacion {

  blogPosts = signal<BlogPost[]>([
    {
      image: 'https://images.unsplash.com/photo-1470114755716-3e1124c6c3bd?w=800',
      title: 'El Arte del Ramen',
      author: 'Jane Doe',
      category: 'Evento',
      date: '08/05/2024',
      description: 'Descubre los secretos detrás de un buen caldo de ramen: horas de cocción lenta, ingredientes frescos y la técnica perfecta para lograr el equilibrio de sabores.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1455279032140-49a4bf46f343?w=800',
      title: 'Taller de Sushi',
      author: 'John Smith',
      category: 'Taller',
      date: '15/05/2024',
      description: 'Aprende a preparar sushi con nuestros chefs en un taller práctico, donde conocerás las técnicas tradicionales japonesas para enrollar, cortar y presentar cada pieza.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1624223875266-81ebbb795584?w=800',
      title: 'Nuevo Menú de Temporada',
      author: 'Maria Garcia',
      category: 'Noticias',
      date: '22/05/2024',
      description: 'Presentamos nuestra nueva carta con platos de temporada, ingredientes frescos y sabores que celebran la auténtica cocina japonesa.',
      link: '#'
    }
  ]);

}
