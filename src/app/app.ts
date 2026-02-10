import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav} from "./food/nav/nav";
import { Portada } from "./food/portada/portada";
import { Horario } from "./food/horario/horario";
import { Application } from "./food/application/application";
import { Platos } from "./food/platos/platos";
import { Comentario } from "./food/comentario/comentario";
import { Publicacion } from "./food/publicacion/publicacion";
import { Footer } from "./food/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Portada, Horario, Application, Platos, Comentario, Publicacion, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UmamiHouse');
}
