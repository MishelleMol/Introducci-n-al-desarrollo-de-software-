import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService, GithubRepo } from '../service/github';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto.html',
  styleUrl: './proyecto.css'
})
export class Proyecto implements OnInit {
  repos: GithubRepo[] = [];
  errorMensaje = '';
  cargando = true;

  private githubService = inject(GithubService);

  ngOnInit(): void {
    this.githubService.getRepos().subscribe({
      next: (data) => {
        this.repos = data
          .filter(repo => !repo.fork)
          .slice(0, 3);

        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener repositorios:', err);
        this.errorMensaje = 'No se pudieron cargar los proyectos.';
        this.cargando = false;
      }
    });
  }
}