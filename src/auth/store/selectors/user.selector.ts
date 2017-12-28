import { createSelector } from "@ngrx/store";

import { User } from "../../models/user.model";
import * as fromFeature from "../reducers";
import * as fromUser from "../reducers/user.reducer";

export const getUserState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.AuthState) => state.user
);

export const getUser = createSelector(
  getUserState,
  (state: fromUser.UserState) => state.user
);
