import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  API_URL = "http://localhost:3000/api/";

  getUser(phoneNumber: string): Observable<any[]> {
    return this.http.get<any>(this.API_URL + "getUser/" + phoneNumber);
  }

  createUser(firstName: string, lastName: string, phoneNumber: string): Observable<any> {
    return this.http.get<any>(this.API_URL + "addUser/" + firstName + "/" + lastName + "/" + phoneNumber);
  }
}
