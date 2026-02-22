import { Component } from '@angular/core';

import { Header } from '../../../components/header/header';
import { Greeting } from '../../../components4/greeting/greeting';
import { Photos } from '../../../components7/photos/photos';
import { Lists } from '../../../components3/lists/lists';
import { Video } from '../../../components5/video/video';
import { Tables } from '../../../components6/tables/tables';
import { Footer } from '../../../components2/footer/footer';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [Header, Greeting, Photos, Lists, Video, Tables, Footer],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv {}