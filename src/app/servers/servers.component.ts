import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "testServer";
  userName = "";
  serverCreated = false;
  servers = ["Testserver", "Testserver 2"];
  secretVisible = false;
  secretLog = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${
      this.serverName
    }`;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = "";
  }

  toggleSecretVisibility() {
    this.secretLog.push(new Date());
    this.secretVisible = !this.secretVisible;
    console.log(this.secretLog);
  }
}
