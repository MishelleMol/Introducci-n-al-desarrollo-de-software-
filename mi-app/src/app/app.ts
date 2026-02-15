import { Component, signal } from '@angular/core';

import { Header } from '../../components/header/header';
import { Greeting } from '../../components4/greeting/greeting';
import { Photos } from '../../components7/photos/photos';
import { Lists } from '../../components3/lists/lists';
import { Video } from '../../components5/video/video';
import { Tables } from '../../components6/tables/tables';
import { Footer } from '../../components2/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Greeting, Photos, Lists, Video, Tables, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mi-app');
}
