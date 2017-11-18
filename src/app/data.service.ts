import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserMessage } from './user-message';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("http://localhost:3000/users");
  }

  addUserMessage(UserMessage){
    return this.http.post("http://localhost:3000/userMessage",UserMessage);
  }
}
