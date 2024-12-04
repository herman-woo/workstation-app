import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Broker } from '../app/pages/submission/broker';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Broker1Service {
  private baseUrl = 'http://localhost:8000/contact/broker/search';
  constructor(private http: HttpClient) {}


  searchBrokerNames(query: string): Observable<Broker[]> {
    const url = `${this.baseUrl}?query=${encodeURIComponent(query)}`;
    return this.http.get<Broker[]>(url).pipe(
      catchError(() => of([])) // Return an empty array in case of error
    );
  }
  
  
}

