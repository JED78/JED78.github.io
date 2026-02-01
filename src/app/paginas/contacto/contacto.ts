import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto implements AfterViewInit {

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}
