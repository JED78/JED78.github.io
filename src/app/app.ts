import { Component } from '@angular/core';
import { CabeceraComponent  } from './componentes/cabecera/cabecera';
import { PiePagina } from './componentes/pie-pagina/pie-pagina';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [
    RouterOutlet,
    CabeceraComponent ,
    PiePagina
  ]
})
export class App {}