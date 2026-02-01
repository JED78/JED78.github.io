import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.html',
  styleUrls: ['./sobre-mi.css']
})
export class SobreMi implements AfterViewInit {

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}