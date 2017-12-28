import { Injectable, Component, Directive } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";
import { tap, map, filter, take, switchMap } from "rxjs/operators";
import * as fromUserStore from "../store";

import { User } from "../models/user.model";

@Injectable()
@Directive({
  selector: "auth-guard"
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromUserStore.AuthState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.isAuthenticated();
  }

  isAuthenticated(): Observable<boolean> {
    return this.store
      .select(fromUserStore.getUser)
      .map((user: User) => user !== undefined && user.uid !== undefined);
  }
}
