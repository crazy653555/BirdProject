import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { UserMessage } from './user-message';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  content = "";
  userMessages: any[] = [];
  users;
  user = {
    userId:'',
    imageUrl:''
  };

  constructor(private dataSer: DataService) {}

  ngOnInit(): void {
    //取得人員名單
    this.dataSer.getUsers().subscribe(req => (this.users = req));
  }

  //加入訊息
  addMessage() {
    //如果有值
    if (this.content) {
      let userMessage: UserMessage = {
        userId: this.user.userId,
        message: this.content
      };

      console.log(userMessage.userId + ':::' + userMessage.message);

      this.dataSer.addUserMessage(userMessage)
      .subscribe(data => {
        this.userMessages = this.userMessages.concat(data);
        this.content = "";
      });
    }
  }

  selectUser($event) {
    console.log($event);
    this.user.userId = this.users[$event].userId; //userId
    this.user.imageUrl = this.users[$event].imageUrl; //imageUrl


  }
}
