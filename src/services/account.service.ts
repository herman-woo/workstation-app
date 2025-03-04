import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaginatedResponse } from './paginated-response.service';
import { map } from 'rxjs/operators'; // Correct import for `map`

@Injectable({
  providedIn: 'root'
})



export class AccountService {

  activeRoute: string;
  // ✅ Setter methods to store data
  setActiveRoute(route: string) {
    console.log("Set Route to:", route)
    this.activeRoute = route;
    console.log("Active Route -", this.activeRoute)

  }

  // ✅ Getter methods (for synchronous retrieval)
  getActiveRoute(): any {
    return this.activeRoute;
  }

  private _accountRecord = new BehaviorSubject<any>(null);
  // ✅ Expose data as Observables
  get accountRecord$(): Observable<any> {
    return this._accountRecord.asObservable();
  }

  // ✅ Setter methods to store data
  setAccountData(data: any) {
    console.log('Setting Account Data:', data);
    this._accountRecord.next(data);
  }

  // ✅ Getter methods (for synchronous retrieval)
  getAccountData(): any {
    return this._accountRecord.value;
  }

  private apiUrl = 'http://localhost:8000/insurance/account/';
  constructor(private http: HttpClient) { }
  getAllAccounts(
    year,
    namedInsured: string,
    underwriter: string,
    broker: string,
    brokerage: string,
    submission: string,
    status: string): Observable<{ accounts: any[], count: number, next: string | null, previous: string | null }> {
    return this.http.get<PaginatedResponse<any>>(
      this.apiUrl + '?insured=' + namedInsured
      + '&underwriter=' + underwriter
      + '&broker=' + broker
      + '&brokerage=' + brokerage
      + '&submission=' + submission
      + '&status=' + status
      + '&year=' + year
    )
      .pipe(map(response => (
        {
          accounts: response.results.map(data => data),
          count: response.count,
          next: response.next,
          previous: response.previous
        }))
      );
  }

  getAccountsByForeignKey(param: string, id: number): Observable<{ accounts: any[], count: number, next: string | null, previous: string | null }> {
    return this.http.get<PaginatedResponse<any>>(this.apiUrl + 'key/' + param + '/' + id).pipe(
      map(response => (
        {
          accounts: response.results.map(data => data),
          count: response.count,
          next: response.next,
          previous: response.previous
        }))
    );
  }

  getAccountById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + id)
  }

  updateAccount(accountId, data: object) {
    this.http.patch<any>(this.apiUrl + accountId + '/', data)
      .subscribe({
        next: (response) => {
          console.log('Update successful:', response);
          window.location.reload()
        },
        error: (error) => {
          console.error('Update failed:', error);
        },
      });
  }
}


