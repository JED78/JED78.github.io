import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.html',
  styleUrls: ['./portafolio.css']
})
export class Portafolio implements AfterViewInit {

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }
}
