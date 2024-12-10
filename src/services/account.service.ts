import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from './paginated-response.service';
import { map } from 'rxjs/operators'; // Correct import for `map`

@Injectable({
  providedIn: 'root'
})
export class AccountService {
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

  updateAccount(accountId,data:object) {
    this.http.patch<any>(this.apiUrl+accountId+'/', data)
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


