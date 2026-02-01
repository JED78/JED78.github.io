import { Component, AfterViewInit } from '@angular/core';
import { tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.html',
  styleUrls: ['./pie-pagina.css'],
})
export class PiePagina implements AfterViewInit {

  async ngAfterViewInit() {
    console.log("Inicializando partículas en pie de página…");

    await loadFull(tsParticles);

    await tsParticles.load({
      id: "tsparticles-footer", // ✅ CORRECTO, apunta al div del footer
      options: {
        fullScreen: { enable: false },
        detectRetina: true,
        background: { color: "transparent" },

        particles: {
          number: { value: 40 },
          color: { value: "#030303ff" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.8 }
        }
      }
    });

    console.log("Partículas en pie de página cargadas");
  }
}
