import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackService } from '../service_stack/stack';

@Component({
  selector: 'app-stack-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack-section.html',
  styleUrl: './stack-section.css'
})
export class StackSection implements OnInit {
  questions: any[] = [];
  cargando = true;
  errorMensaje = '';

  private stackService = inject(StackService);

  ngOnInit(): void {
    this.stackService.getQuestions().subscribe({
      next: (data) => {
        this.questions = data.hits.slice(0, 3);
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener temas:', err);
        this.errorMensaje = 'No se pudieron cargar los temas.';
        this.cargando = false;
      }
    });
  }
}