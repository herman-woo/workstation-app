import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BrokerCompanyService {
  private apiUrl = 'http://localhost:8000/company/';
  constructor(private http: HttpClient) {}
  getAllBrokerCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  getBrokerCompanyById(id:number): Observable<any> {
    return this.http.get<any>(this.apiUrl+id)
  }

  searchInsuranceCompanies(query: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'search/?query='+query);
  }
}
