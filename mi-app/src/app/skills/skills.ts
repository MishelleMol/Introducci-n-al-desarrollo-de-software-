import { Component } from '@angular/core';
import { FirstUpperPipe } from '../first-upper-pipe';
import { CommonModule } from '@angular/common';
import { DataService } from '../data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FirstUpperPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills: string[] = [];

  constructor(private dataService: DataService) {
    this.skills = this.dataService.getSkills();
  }
}