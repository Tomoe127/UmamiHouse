import { Component, signal } from '@angular/core';

interface Article {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface Schedule {
  day: string;
  hours: string;
}

@Component({
  selector: 'app-horario',
  imports: [],
  templateUrl: './horario.html',
  styleUrl: './horario.css',
})
export class Horario {

  articles = signal<Article[]>([
    {
      image: 'https://www.muyjapones.com/wp-content/uploads/2022/11/menu-Washoku.jpg',
      title: 'Sabores Auténticos',
      description: 'Descubre la auténtica esencia de la cocina japonesa con ingredientes frescos y técnicas tradicionales.',
      link: '#sabores'
    },
    {
      image: 'https://telemaki.com/blog/assets/uploads/2021/05/rod-long-kImU-9S9uh8-unsplash-2048x1365.jpg',
      title: 'Experiencia Única',
      description: 'Sumérgete en una experiencia gastronómica que combina tradición, innovación y pasión por la comida.',
      link: '#experiencia'
    }
  ]);

  schedules = signal<Schedule[]>([
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '11:00 AM - 10:00 PM' },
    { day: 'Miércoles', hours: '11:00 AM - 10:00 PM' },
    { day: 'Jueves', hours: '11:00 AM - 10:00 PM' },
    { day: 'Viernes', hours: '11:00 AM - 11:00 PM' },
    { day: 'Sábado', hours: '12:00 PM - 11:00 PM' },
    { day: 'Domingo', hours: '12:00 PM - 9:00 PM' }
  ]);

  phone = signal('854-752-66852');
  scheduleImage = signal('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f2/be/65/caption.jpg');

}
