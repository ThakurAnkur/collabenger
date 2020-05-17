import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userDetail: any;
  currentReceiver: any;
  currentSender: any;
  constructor() { }
}
