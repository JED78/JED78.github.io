import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { tsParticles } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";

@Component({
  standalone: true,
  selector: 'app-cabecera',
  templateUrl: './cabecera.html',
  styleUrls: ['./cabecera.css'],
  imports: [RouterModule]
})
export class CabeceraComponent implements AfterViewInit {

  menuAbierto = true;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  async ngAfterViewInit() {
    console.log("Inicializando partículas en cabecera…");

    await loadBasic(tsParticles);

    await tsParticles.load({
      id: "tsparticles-header",
      options: {
        fullScreen: { enable: false },
        detectRetina: true,

        background: {
          color: "transparent"
        },

        particles: {
          number: { value: 40 },
          color: { value: "#030303ff" },   // 👈 BLANCO para que se vean
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.8 }
        }
      }
    });

    console.log("Partículas en cabecera cargadas");
  }
}
