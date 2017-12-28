import { Component, OnInit } from "@angular/core";

import * as fromUserStore from "../../../auth";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { User } from "../../../auth/models/user.model";

@Component({
  selector: "secret",
  template: `
    <h2>Home</h2>
    <div *ngIf="user$ | async as user">
        <h1>Hi, {{ user.displayName }}</h1>
        <p><strong>Secret message</strong>: {{ message }}</p>
        
    </div>
    <p><a routerLink="/home">Navigate to home</a></p>
  `,
  styleUrls: []
})
export class SecretComponent implements OnInit {
  user$: Observable<User>;
  message = "This is a secret message";

  constructor(private store: Store<fromUserStore.UserState>) {}

  ngOnInit() {
    this.user$ = this.store.select(fromUserStore.getUser);
    this.store.dispatch(new fromUserStore.GetUser());
  }
}
