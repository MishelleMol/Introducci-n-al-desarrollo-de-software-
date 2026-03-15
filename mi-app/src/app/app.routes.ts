import { Routes } from '@angular/router';
import { Cv } from './cv/cv';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Jobs } from './experience/jobs/jobs';
import { Studies } from './experience/studies/studies';
import { Proyecto } from './proyecto/proyecto';

export const routes: Routes = [
  { path: '', component: Cv },              
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: "proyectos", component: Proyecto}, 
  {
    path: 'experience',
    component: Experience,
    children: [
      { path: 'jobs', component: Jobs },
      { path: 'studies', component: Studies },
      { path: '', redirectTo: 'jobs', pathMatch: 'full' }
    ]
  }
];


