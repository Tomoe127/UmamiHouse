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
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
      title: 'The Art of Coffee Brewing',
      author: 'Jane Doe',
      category: 'Event',
      date: '08/05/2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, exercitationem temporibus. Fuga consectetur sed, sequi recusandae eius magni iusto repellat, architecto nostrum cum optio asperiores.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
      title: 'Coffee Tasting Workshop',
      author: 'John Smith',
      category: 'Workshop',
      date: '15/05/2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, exercitationem temporibus. Fuga consectetur sed, sequi recusandae eius magni iusto repellat, architecto nostrum cum optio asperiores.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
      title: 'New Menu Launch',
      author: 'Maria Garcia',
      category: 'News',
      date: '22/05/2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, exercitationem temporibus. Fuga consectetur sed, sequi recusandae eius magni iusto repellat, architecto nostrum cum optio asperiores.',
      link: '#'
    }
  ]);

}
