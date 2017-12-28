import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromUsers from "./user.reducer";
import { User } from "../../models/user.model";

export interface AuthState {
  user: fromUsers.UserState;
}

export const reducers: ActionReducerMap<AuthState> = {
  user: fromUsers.reducer
};

export const getAuthState = createFeatureSelector<AuthState>("auth");

export * from "./user.reducer";
