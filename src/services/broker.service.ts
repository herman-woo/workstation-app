import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Broker } from '../models/insurance-broker.model';
import { PaginatedResponse } from './paginated-response.service';
import { map } from 'rxjs/operators'; // Correct import for `map`

@Injectable({
  providedIn: 'root'
})
export class BrokerService {
  private apiUrl = 'http://localhost:8000/contact/broker/';
  constructor(private http: HttpClient) { }

  getAllInsuranceBrokers(): Observable<{ brokers: Broker[], count: number, next: string | null, previous: string | null }> {
    return this.http.get<PaginatedResponse<Broker>>(this.apiUrl).pipe(
      map(response => (
        {
          brokers: response.results.map(json => Broker.mapJson(json)),
          count: response.count,
          next: response.next,
          previous: response.previous
        }))
    );
  }

  getInsuranceBrokerById(id: number): Observable<Broker> {
    return this.http.get<any>(this.apiUrl+id).pipe(map(json => Broker.mapJson(json)))
  }

  searchInsuranceBrokers(query: string): Observable<Broker[]> {
    return this.http.get<any[]>(this.apiUrl + 'search?query=' + query).pipe(map((response => response.map(json => Broker.mapJson(json)))))
  }
}
