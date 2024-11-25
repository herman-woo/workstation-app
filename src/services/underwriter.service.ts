import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Underwriter } from '../models/underwriter.model';
import { map } from 'rxjs/operators'; // Correct import for `map`

@Injectable({
  providedIn: 'root'
})
export class UnderwriterService {
  private apiUrl = 'http://localhost:8000/underwriter/';
  //to listen for when creating, a new underwriter
  private refreshSubject = new BehaviorSubject<void>(null);

  constructor(private http: HttpClient) { }


  getAllUnderwriters(): Observable<Underwriter[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(map((response => response.map(json => Underwriter.mapJson(json)
    ))))
  }

  getUnderwriterById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + id).pipe(map(json => Underwriter.mapJson(json)))
  }

  searchUnderwriter(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'search/?query=' + query).pipe(map((response => response.map(json => Underwriter.mapJson(json)))))
  }

  createUnderwriter(underwriter:{ first_name: string; last_name: string, business_unit: string, role: string}): Observable<any>{
    return this.http.post<any>(this.apiUrl,underwriter)
  }

  //Currently not working.
  get refresh$(): Observable<void> {
    return this.refreshSubject.asObservable();
  }
  triggerUWListRefresh() {
    this.refreshSubject.next();
  }

}
