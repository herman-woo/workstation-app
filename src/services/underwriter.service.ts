import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnderwriterService {
  private apiUrl = 'http://localhost:8000/underwriter/';
  constructor(private http: HttpClient) {}

  getAllUnderwriters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  getUnderwriterById(id:number): Observable<any> {
    return this.http.get<any>(this.apiUrl+id)
  }

  searchUnderwriter(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'search/?query='+query);
  }
}
