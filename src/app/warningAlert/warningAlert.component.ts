import { Component } from "@angular/core";

@Component({
  selector: "app-warning",
  template: "<p>Ostrzeżenie</p>",
  styles: [
    `
      p {
        color: darkred;
        border: 1px solid darkred;
      }
    `
  ]
})
export class WarningAlert {}
