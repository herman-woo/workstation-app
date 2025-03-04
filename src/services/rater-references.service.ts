import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaterReferencesService {
  private root = 'http://127.0.0.1:8080/reference/codes'; // FastAPI endpoint

  constructor(private http: HttpClient) {}

  getNaicsCodes(): Observable<{ [key: string]: { description: string, premium: number } }> {
    const apiUrl = 'http://127.0.0.1:8080/reference/codes'; // FastAPI endpoint
    return this.http.get<{ [key: string]: { description: string, premium: number } }>(apiUrl);
  }
  getModifiers(): Observable<{ [key: string]: { type: string, description: string, factor: number } }> {
    const modApi = 'http://127.0.0.1:8080/reference/mods/quantitative'; // FastAPI endpoint
    return this.http.get<{ [key: string]: { type: string, description: string, factor: number } }>(modApi);
  }
  
}
