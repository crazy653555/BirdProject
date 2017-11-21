import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserMessage } from './user-message';

@Injectable()
export class DataService {

  apiUsers = "http://localhost:11053/api/Users";
  apiUserMessage = "http://localhost:11053/api/BirdMessages";


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
