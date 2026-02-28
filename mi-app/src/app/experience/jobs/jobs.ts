import { Component } from '@angular/core';
import { TruncatePipe } from '../../truncate-pipe'; 
import { CommonModule } from '@angular/common';
import { DataService } from '../../data';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './jobs.html',
  styleUrl: './jobs.css'
})
export class Jobs {
  jobs: string[] = [];

  constructor(private dataService: DataService) {
    this.jobs = this.dataService.getJobs();
  }
}