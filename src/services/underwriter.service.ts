import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Underwriter } from '../models/underwriter.model';
import { map } from 'rxjs/operators'; // Correct import for `map`
import { PaginatedResponse } from './paginated-response.service';

@Injectable({
  providedIn: 'root'
})
export class UnderwriterService {
  private apiUrl = 'http://localhost:8000/carrier/underwriter';
  //to listen for when creating, a new underwriter
  private refreshSubject = new BehaviorSubject<void>(null);

  constructor(private http: HttpClient) { }


  getAllUnderwriters(unit: string,team:string): Observable<{ underwriters: Underwriter[], count: number, next: string | null, previous: string | null }> {
    return this.http.get<PaginatedResponse<Underwriter>>(this.apiUrl+'?unit='+unit).pipe(
      map(response => (
        {
          underwriters: response.results.map(json => Underwriter.mapJson(json)),
          count: response.count,
          next: response.next,
          previous: response.previous
        }))
    );
  }


  getUnderwriterById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/'+id).pipe(map(json => Underwriter.mapJson(json)))
  }

  searchUnderwriter(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/search?query=' + query).pipe(map((response => response.map(json => Underwriter.mapJson(json)))))
  }

  createUnderwriter(underwriter: { first_name: string; last_name: string, business_unit: string, role: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, underwriter)
  }

  //Currently not working.
  get refresh$(): Observable<void> {
    return this.refreshSubject.asObservable();
  }
  triggerUWListRefresh() {
    this.refreshSubject.next();
  }

}
