import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.startVideo();


    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.startVideo());
  }

  private startVideo(): void {
    const video = this.bgVideo?.nativeElement;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';

 
    video.currentTime = 0;

    video.play().catch(() => {});
  }
}