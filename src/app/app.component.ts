import { Component } from "@angular/core";
import { Message } from "./message";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  content = "";
  messages: any[] = [];
  users = [
    { id: 1, name: "avon" },
    { id: 2, name: "eason" },
    { id: 3, name: "mary" }
  ];

  user;



  //加入訊息
  addMessage() {
    //如果有值
    if (this.content) {
      let newMessage: Message = {
        message: this.content
      };

      this.messages.push(newMessage);
      this.content = "";
    }
  }

  selectUser($event){
    console.log('selectUser()');

    console.log($event);
  }
}
