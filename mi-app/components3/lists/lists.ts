import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lists.html',
  styleUrl: './lists.css',
})
export class Lists {

 
  idiomas: string[] = ['Español', 'Inglés', 'Francés'];


  habilidades: string[] = [
    'HTML intermedio',
    'Python',
    'Circuitos',
    'JavaScript',
    'HTML (lenguaje de desarrollo web)',
  ];

  habilidadesFiltradas: string[] = [...this.habilidades];
  sinResultados = false;

  filtrarHabilidades(event: Event) {
    const input = event.target as HTMLInputElement;
    const filtro = input.value.toLowerCase().trim();

    this.habilidadesFiltradas = this.habilidades.filter(h =>
      h.toLowerCase().includes(filtro)
    );

    this.sinResultados = this.habilidadesFiltradas.length === 0;
  }

  
  clases: string[] = [
    'Cálculo',
    'Economía',
    'Introducción al software',
    'Introducción a la infraestructura',
    'Marketing',
  ];
}
