import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, catchError, throwError } from 'rxjs';
import { Rater, Exposure, Modifier } from '../models/rater.model';

@Injectable({
  providedIn: 'root'
})
export class RaterService {
  constructor(private http: HttpClient) { }

  //store a rater per account
  private _accountRater = new BehaviorSubject<any>(null);

  //return the data as an observable
  get accountRater$(): Observable<any> {
    return this._accountRater.asObservable();
  }
  
  //Setters and getters
  setRaterData(data: any) {
    console.log('Setting Rater Data:', data);
    this._accountRater.next(data);
  }

  getRaterData(): any {
    return this._accountRater.value;
  }


  
  private root = 'http://localhost:8080/rater';

  getAllRaters(): Observable<Rater[]> {
    return this.http.get<Rater[]>(`${this.root}`)
  }
  
  addRater(
    year: number,
    account_id: number,
    business_unit_id: number,
    product: string,
    product_id: number,
    named_insured: string,
    named_insured_id: number,
    business_unit: string
  ): Observable<Rater> {
    const apiUrl = 'http://127.0.0.1:8080/rater';
    // const body = { product_description, premium, quantity, naics_premium, note, naics_code, modifier };
    const body = {
      year,
      account_id,
      business_unit_id,
      product,
      product_id,
      named_insured,
      named_insured_id,
      business_unit
    }

    // return this.http.post<Cart>(apiUrl, body).pipe(
    return this.http.post<Rater>(apiUrl, body).pipe(
      catchError(error => {
        console.error('Error adding item:', error);
        return throwError(() => new Error('Failed to add item to cart'));
      })
    );
  }

  //Rater Summary Services
  createCart(): Observable<Rater> {
    const apiUrl = `${this.root}`;
    console.log(`Sending POST request to: ${apiUrl}`);

    return this.http.post<Rater>(apiUrl, {}).pipe(
      catchError(error => {
        console.error('Error creating Rater:', error);
        return throwError(() => new Error('Failed to create Rater'));
      })
    );
  }

  getRaterByAccountID(accountId: number): Observable<any> {
    return this.http.get<Rater>(`${this.root}/account/${accountId}`).pipe(
      catchError(error => {
        console.error('Error fetching cart:', error);
        return throwError(() => new Error('Failed to load cart data'));
      })
    );
  }


  //Exposures
  addRaterItem(rater_id: number,
    product_description: string,
    premium: number,
    quantity: number,
    naics_premium: number,
    note: string,
    naics_code: number,
    modifier: number): Observable<Exposure> {
    const apiUrl = `${this.root}/${rater_id}/exposure`;
    const body = { rater_id, product_description, premium, quantity, naics_premium, note, naics_code, modifier };

    return this.http.post<Exposure>(apiUrl, body).pipe(
      catchError(error => {
        console.error('Error adding item:', error);
        return throwError(() => new Error('Failed to add item to cart'));
      })
    );
  }

  deleteRaterItem(rater_id: number, itemId: number): Observable<void> {
    const apiUrl = `${this.root}/${rater_id}/exposure/${itemId}`;
    return this.http.delete<void>(apiUrl).pipe(
      catchError(error => {
        console.error('Error deleting item:', error);
        return throwError(() => new Error('Failed to delete item'));
      })
    );
  }


  //Modifiers
  addModItem(rater_id: number,
    description: string,
    factor: number,
    note: string,
    type: string): Observable<Modifier> {

    const apiUrl = `http://127.0.0.1:8080/rater/${rater_id}/credit`;
    const body = { rater_id, description, factor, note, type };
    console.log("POSTING: ", body)
    return this.http.post<Modifier>(apiUrl, body).pipe(
      catchError(error => {
        console.error('Error adding item:', error);
        return throwError(() => new Error('Failed to add Mod to Rater'));
      })
    );
  }

  deleteModItem(rater_id: number, itemId: number): Observable<void> {
    const apiUrl = `http://127.0.0.1:8080/rater/${rater_id}/credit/${itemId}`;
    return this.http.delete<void>(apiUrl).pipe(
      catchError(error => {
        console.error('Error deleting item:', error);
        return throwError(() => new Error('Failed to delete Mod'));
      })
    );
  }



  //Options
  addOption(
    rater_id: number | undefined,
    per_limit: number,
    total_limit: number,
    retention: number,
    terms: number,
    total_premium: number | undefined,) {
    const apiUrl = `http://127.0.0.1:8080/rater/${rater_id}/option`;
    const body = { rater_id, per_limit, total_limit, retention, terms, total_premium };
    console.log("POSTING: ", body)
    return this.http.post<any>(apiUrl, body).pipe(
      catchError(error => {
        console.error('Error adding item:', error);
        return throwError(() => new Error('Failed to add item to cart'));
      })
    );
  }

  deleteOptionItem(rater_id: number, itemId: number): Observable<void> {
    const apiUrl = `http://127.0.0.1:8080/rater/${rater_id}/option/${itemId}`;
    return this.http.delete<void>(apiUrl).pipe(
      catchError(error => {
        console.error('Error deleting item:', error);
        return throwError(() => new Error('Failed to delete item'));
      })
    );
  }
}
