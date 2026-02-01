import { RouterModule } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  standalone: true,
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
  imports: [RouterModule]   // ✅ IMPORTANTE para usar routerLink
})
export class Inicio {}
