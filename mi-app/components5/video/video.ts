import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.html',
  styleUrl: './video.css',
})
export class Video {
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.youtube.com/embed/CSAbYcp7Jkk?rel=0&modestbranding=1';
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
