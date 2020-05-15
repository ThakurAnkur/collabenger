import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    const req = this.http.get<any>('http://localhost:3000/api/getUser/123');
    req.subscribe(
      (x => console.log('OK',x)),
      (x => console.log('ERROR',x)),
      (() => console.log('COMPLETE'))
    );
  }

}
