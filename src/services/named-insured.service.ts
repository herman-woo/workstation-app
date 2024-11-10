import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NamedInsuredService {
  private apiUrl = 'http://localhost:8000/insured/';
  constructor(private http: HttpClient) {}

  getAllNamedInsured(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  getNamedInsuredById(id:number): Observable<any> {
    return this.http.get<any>(this.apiUrl+id)
  }




}
