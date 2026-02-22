import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {}