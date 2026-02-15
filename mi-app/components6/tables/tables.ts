import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.html',
  styleUrl: './tables.css',
})
export class Tables {
  mostrarExperiencia = false;

  toggleExperiencia() {
    this.mostrarExperiencia = !this.mostrarExperiencia;
  }
}
