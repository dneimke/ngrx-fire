import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <h2>Welcome to NGRX + Firebase</h2>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
}
