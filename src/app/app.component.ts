import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { UserMessage } from "./user-message";
import { getLocaleDateFormat } from "@angular/common/src/i18n/locale_data_api";

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
    userId: "",
    imageUrl: ""
  };

  constructor(private dataSer: DataService) {}

  ngOnInit(): void {
    //取得人員名單
    this.dataSer.getUsers().subscribe(req => (this.users = req));
    this.dataSer.getUserMessage().subscribe(data => (this.userMessages = data));
  }

  //加入訊息
  addMessage() {
    //如果有值
    if (this.content) {
      let userMessage: UserMessage = {
        userId: this.user.userId,
        imageUrl: this.user.imageUrl,
        message: this.content,
        dateTime: Date().toString()
      };

      console.log(
        userMessage.userId +
          ":::" +
          userMessage.message +
          ":::" +
          userMessage.dateTime
      );

      this.dataSer.addUserMessage(userMessage).subscribe(data => {
        this.userMessages = this.userMessages.concat(data);
        this.content = "";
      });
    }
  }

  selectUser($event) {
    console.log($event);
    var index = $event - 1;
    this.user.userId = this.users[index].id; //userId
    this.user.imageUrl = this.users[index].imageUrl; //imageUrl
  }
}
