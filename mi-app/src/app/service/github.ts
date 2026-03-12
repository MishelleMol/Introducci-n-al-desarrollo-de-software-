import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GithubRepo {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.github.com/users/MishelleMol/repos?sort=updated';

  getRepos(): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(this.apiUrl);
  }
}