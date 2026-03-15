import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackService {
  private http = inject(HttpClient);

  private apiUrl =
    'https://hn.algolia.com/api/v1/search?query=angular';

  getQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}