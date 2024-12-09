import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from './paginated-response.service';
import { map } from 'rxjs/operators'; // Correct import for `map`
import { BrokerCompany } from '../models/broker-company.model';
import { Broker } from '../models/insurance-broker.model';

@Injectable({
  providedIn: 'root'
})


export class BrokerCompanyService {
  private apiUrl = 'http://localhost:8000/contact/company/';
  constructor(private http: HttpClient) {}
  // getAllBrokerCompanies(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl)
  // }
  getAllBrokerCompanies(): Observable<{ insureds: BrokerCompany[], count: number, next: string | null, previous: string | null }> {
    return this.http.get<PaginatedResponse<BrokerCompany>>(this.apiUrl).pipe(
      map(response => (
        {
          insureds: response.results.map(json => BrokerCompany.mapJson(json)),
          count: response.count,
          next: response.next,
          previous: response.previous
        }))
    );
  }
  
  searchInsuranceCompanies(query: string): Observable<BrokerCompany[]> {
    return this.http.get<any[]>(this.apiUrl + 'search?query=' + query).pipe(map((response => response.map(json => BrokerCompany.mapJson(json)))))
  }


  getBrokerCompanyById(id:number): Observable<BrokerCompany> {
    return this.http.get<any>(this.apiUrl+id).pipe(map(json => BrokerCompany.mapJson(json)))
  }

}
