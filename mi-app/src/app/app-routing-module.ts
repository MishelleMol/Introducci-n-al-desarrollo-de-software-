import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Jobs } from './experience/jobs/jobs';
import { Studies } from './experience/studies/studies';

const routes: Routes = [
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
