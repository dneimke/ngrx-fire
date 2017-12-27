import { Component, OnInit } from "@angular/core";

import * as fromUserStore from "../../../auth";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

interface AppState {
  user: fromUserStore.User;
}

@Component({
  selector: "home",
  template: `
    <h2>Home</h2>
    <div *ngIf="user$ | async as user">
      <h1>Hi, {{ user.displayName }}</h1>
      <h4>{{ user.uid }}</h4>
      <button *ngIf="!user.uid"
              (click)="googleLogin()" 
              [class.is-loading]="user.loading">
        Sign In with Google
      </button>
  
      <button *ngIf="user.uid"
              (click)="logout()">
        Logout
      </button>
    </div>
  `,
  styleUrls: []
})
export class HomeComponent implements OnInit {
  user$: Observable<fromUserStore.User>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store.select("user");
    this.store.dispatch(new fromUserStore.GetUser());
  }

  googleLogin() {
    this.store.dispatch(new fromUserStore.GoogleLogin());
  }

  logout() {
    this.store.dispatch(new fromUserStore.Logout());
  }
}
