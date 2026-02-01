import { Routes } from '@angular/router';

import { Inicio } from './paginas/inicio/inicio';
import { SobreMi } from './paginas/sobre-mi/sobre-mi';
import { Habilidades } from './paginas/habilidades/habilidades';
import { Portafolio } from './paginas/portafolio/portafolio';
import { Contacto } from './paginas/contacto/contacto';
import { Certificaciones } from './certificaciones/certificaciones';

export const routes: Routes = [
  { path: '', component: Inicio},
  { path: 'sobre-mi', component: SobreMi },
  { path: 'habilidades', component: Habilidades },
  { path: 'portafolio', component: Portafolio },
  { path: 'contacto', component: Contacto },
  { path: 'certificaciones', component: Certificaciones },

  // Ruta comodín
  { path: '**', redirectTo: '' }
];