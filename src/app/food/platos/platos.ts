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
      description: 'Caldo intenso a fuego lento, fideos artesanales y toppings frescos en cada tazón.'
    },
    {
      image: 'img/Gyoza1.png',
      title: 'Gyoza',
      description: 'Empanadillas japonesas rellenas de cerdo y vegetales, doradas a la perfección.'
    },
    {
      image: 'img/Gyudon1.png',
      title: 'Gyudon',
      description: 'Tazón de arroz con finas láminas de res guisadas en salsa dulce de soya.'
    },
    {
      image: 'img/Karaage1.png',
      title: 'Karaage',
      description: 'Pollo japonés marinado y frito, crujiente por fuera y jugoso por dentro.'
    },
    {
      image: 'img/Katsudon1.png',
      title: 'Katsudon',
      description: 'Chuleta de cerdo empanizada sobre arroz, bañada en huevo y salsa tare.'
    },
    {
      image: 'img/Okonomiyaki1.png',
      title: 'Okonomiyaki',
      description: 'Panqueque salado japonés con repollo, mariscos y salsa okonomiyaki.'
    },
    {
      image: 'img/Tonkatsu1.png',
      title: 'Tonkatsu',
      description: 'Chuleta de cerdo empanizada y frita, servida con salsa tonkatsu y repollo fresco.'
    },
    {
      image: 'img/Yakisoba1.png',
      title: 'Yakisoba',
      description: 'Fideos salteados con vegetales, carne y la clásica salsa yakisoba.'
    }
  ]);

  get firstRow(): CoffeeFlavor[] {
    return this.coffeeFlavors().slice(0, 4);
  }

  get secondRow(): CoffeeFlavor[] {
    return this.coffeeFlavors().slice(4, 8);
  }

}
