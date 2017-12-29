import { Component, OnInit } from "@angular/core";

import * as fromUserStore from "../../../auth";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { User } from "../../../auth/models/user.model";

@Component({
  selector: "home",
  template: `
    <h2>Home</h2>
    <div *ngIf="user$ | async as user">
      <h1>Hi, {{ user.displayName }}</h1>
      <h4>{{ user.uid }}</h4>
      <button *ngIf="!user.uid" (click)="googleLogin()" 
              [class.is-loading]="user.loading">
        Sign In with Google
      </button>
  
      <button *ngIf="user.uid" (click)="logout()">
        Logout
      </button>
    </div>
    <p><a routerLink="/secret">Navigate to secret</a></p>
    <p><a routerLink="/rxjs">Navigate to Observables</a></p>
  `,
  styleUrls: []
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<fromUserStore.UserState>) {}

  ngOnInit() {
    this.user$ = this.store.select(fromUserStore.getUser);
    this.store.dispatch(new fromUserStore.GetUser());

    // const arr: number[] = [1, 5];
    // let result = arr.map(n => n + 1);
    // console.log(result);
  }

  googleLogin() {
    this.store.dispatch(new fromUserStore.GoogleLogin());
  }

  logout() {
    this.store.dispatch(new fromUserStore.Logout());
  }
}
