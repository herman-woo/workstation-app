import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {
  private apiUrl = 'http://localhost:8000/broker/';
  constructor(private http: HttpClient) { }
  getAllInsuranceBrokers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  getInsuranceBrokerById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + id)
  }

  searchInsuranceBrokers(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'search/?query=' + query);
  }
}
