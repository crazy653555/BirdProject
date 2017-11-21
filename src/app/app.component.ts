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
    birdId: "",
    userName: "",
    imageUrl: ""
  };
  isSelect: boolean = false;

  constructor(private dataSer: DataService) {}

  ngOnInit(): void {
    //取得人員名單
    this.dataSer.getUsers().subscribe(req => (this.users = req));
    this.dataSer.getUserMessage().subscribe(data => (this.userMessages = data));
  }

  //加入訊息
  addMessage() {
    //如果有值
    if (this.isSelect && this.message) {
      let userMessage: UserMessage = {
        birdId: this.user.birdId,
        message: this.message
      };

      this.dataSer.addUserMessage(userMessage).subscribe(data => {
        this.message = "";
        this.dataSer
          .getUserMessage()
          .subscribe(data => (this.userMessages = data));
      });
    }
  }

  //選擇使用者
  selectUser(birdId) {
    if (birdId) {
      this.user = this.users.find(item => {
        this.isSelect = true;
        return item.birdId == birdId;
      });
    } else {
      this.isSelect = false;
    }
  }
}
