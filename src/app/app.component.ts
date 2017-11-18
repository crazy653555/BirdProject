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
  message = "";
  userMessages: any[] = [];
  users;
  user = {
    userId: "",
    userName:"",
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
    if (this.message) {
      let userMessage: UserMessage = {
        userId: this.user.userId,
        userName:this.user.userName,
        imageUrl: this.user.imageUrl,
        message: this.message,
        dateTime: Date().toString()
      };

      this.dataSer.addUserMessage(userMessage).subscribe(data => {
        this.userMessages = this.userMessages.concat(data);
        this.message = "";
      });
    }
  }

  selectUser($event) {
    var index = $event - 1;
    this.user.userId = this.users[index].id; //userId
    this.user.userName = this.users[index].name; //使用者
    this.user.imageUrl = this.users[index].imageUrl; //imageUrl
  }
}
