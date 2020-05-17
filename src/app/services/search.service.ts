import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  API_URL = "http://localhost:3000/api/";
  constructor(private http: HttpClient) { }
  
  getSearchResult(searchText) {
    return this.http.get<any>(this.API_URL + "search/" + searchText);
  }
  // createChannel(){
  //   return this.http.get<any>(this.API_URL + "createChannel/" + )
  // }
}
