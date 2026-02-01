import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
  imports: [RouterModule]   // ✅ IMPORTANTE para usar routerLink
})
export class Inicio {}
