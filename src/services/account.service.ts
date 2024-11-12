import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8000/account/';
  constructor(private http: HttpClient) {}

  getAccountById(id:number): Observable<any> {
    return this.http.get<any>(this.apiUrl+id)
  }
}
