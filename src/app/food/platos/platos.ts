import { Component, signal } from '@angular/core';

interface CoffeeFlavor {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-platos',
  imports: [],
  templateUrl: './platos.html',
  styleUrl: './platos.css',
})
export class Platos {

  coffeeFlavors = signal<CoffeeFlavor[]>([
    {
      image: 'img/Ramen1.png',
      title: 'Ramen',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?'
    },
    {
      image: 'img/Gyoza1.png',
      title: 'Gyoza',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?'
    },
    {
      image: 'img/Gyudon1.png',
      title: 'Gyudon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?'
    },
    {
      image: 'img/Karaage1.png',
      title: 'Karaage',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?'
    },
    {
      image: 'img/Katsudon1.png',
      title: 'Katsudon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?'
    },
    {
      image: 'img/Okonomiyaki1.png',
      title: 'Okonomiyaki',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?'
    },
    {
      image: 'img/Tonkatsu1.png',
      title: 'Tonkatsu',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?'
    },
    {
      image: 'img/Yakisoba1.png',
      title: 'Yakisoba',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?'
    }
  ]);

  get firstRow(): CoffeeFlavor[] {
    return this.coffeeFlavors().slice(0, 4);
  }

  get secondRow(): CoffeeFlavor[] {
    return this.coffeeFlavors().slice(4, 8);
  }

}
