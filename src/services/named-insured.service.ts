import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NamedInsured } from '../models/named-insured.model';
import { map } from 'rxjs/operators'; // Correct import for `map`

@Injectable({
  providedIn: 'root'
})
export class NamedInsuredService {
  private apiUrl = 'http://localhost:8000/insured/';
  constructor(private http: HttpClient) {}

  getAllNamedInsured(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(map((response => response.map(json => NamedInsured.mapJson(json)
  ))))
  }

  getNamedInsuredById(id:number): Observable<any> {
    return this.http.get<any>(this.apiUrl + id).pipe(map(json => NamedInsured.mapJson(json)))
  }

  searchNamedInsured(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'search/?query=' + query).pipe(map((response => response.map(json => NamedInsured.mapJson(json)))))
  }

  createNamedInsured(insured:{ name: string; address: string, postal_code: string, province: string}): Observable<any>{
    return this.http.post<any>(this.apiUrl,insured)
  }
}
