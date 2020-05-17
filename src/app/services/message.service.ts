import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  API_URL = "http://localhost:3000/api/";
  constructor(private http: HttpClient) { }
  generateChannelId(senderId, receiverId) {
    return this.http.get<any>(this.API_URL + "generateChannelId/" + senderId + "/" + receiverId);
  }
  getUnReadMessage(senderId, receiverId) {
    return this.http.get<any>(this.API_URL + "getunreadmessage/" + senderId + "/" + receiverId);
  }
  getChannelList(userId) {
    return this.http.get<any>(this.API_URL + "getunreadmessage/" + userId);
  }
}
