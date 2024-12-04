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
  constructor(private http: HttpClient) {}
  getAllAccounts(namedInsured:string): Observable<{ accounts: any[], count: number, next: string | null, previous: string | null }> {
    return this.http.get<PaginatedResponse<any>>(this.apiUrl+'?insured='+namedInsured).pipe(
      map(response => (
        {
          accounts: response.results.map(data => data),
          count: response.count,
          next: response.next,
          previous: response.previous
        }))
    );
  }

  getAccountsByForeignKey(param: string, id:number): Observable<{ accounts: any[], count: number, next: string | null, previous: string | null }> {
    return this.http.get<PaginatedResponse<any>>(this.apiUrl+'key/'+param+'/'+id).pipe(
      map(response => (
        {
          accounts: response.results.map(data => data),
          count: response.count,
          next: response.next,
          previous: response.previous
        }))
    );
  }
  
  getAccountById(id:number): Observable<any> {
    return this.http.get<any>(this.apiUrl+id)
  }

}
