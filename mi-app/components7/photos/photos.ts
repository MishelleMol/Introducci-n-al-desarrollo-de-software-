import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Slide = { src: string; alt: string; caption?: string };

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos {

  slides: Slide[] = [
    { src: '/logros/logro1.jpg', alt: 'Logro 1', caption: 'Servicio Social: Regalos en Navidad' },
    { src: '/logros/logro2.jpg', alt: 'Logro 2', caption: 'Servicio Social: Patitas a la Obra' },
    { src: '/logros/logro3.jpg', alt: 'Logro 3', caption: 'Certificado de Ley del Monte' },
    {src: '/logros/logro4.jpg', alt: 'Logro 4', caption: 'Proyecto Final: Programación' },
  ];

  i = 0;

  prev() {
    this.i = (this.i - 1 + this.slides.length) % this.slides.length;
  }

  next() {
    this.i = (this.i + 1) % this.slides.length;
  }

  goTo(index: number) {
    this.i = index;
  }
}
