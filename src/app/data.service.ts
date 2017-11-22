import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserMessage } from "./user-message";

@Injectable()
export class DataService {
  //test機
  // apiUsers = "http://localhost:11053/api/Users";
  // apiBirdMessage = "http://localhost:11053/api/birdmessages";

  //正式機
   apiUsers = "https://birdprojectapi20171121042818.azurewebsites.net/api/Users";
   apiBirdMessage = "https://birdprojectapi20171121042818.azurewebsites.net/api/BirdMessages";

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUsers);
  }

  getUserMessage() {
    return this.http.get<any[]>(this.apiBirdMessage);
  }

  addUserMessage(UserMessage) {
    return this.http.post(this.apiBirdMessage, UserMessage);
  }
}
