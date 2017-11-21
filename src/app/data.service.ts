import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserMessage } from './user-message';

@Injectable()
export class DataService {

  apiUsers = "http://localhost:2673/api/users";
  apiUserMessage = "http://localhost:3000/userMessage";


  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUsers);
  }



  getUserMessage(){
    return this.http.get<any[]>(this.apiUserMessage);
  }

  addUserMessage(UserMessage){
    return this.http.post(this.apiUserMessage,UserMessage);
  }

}
