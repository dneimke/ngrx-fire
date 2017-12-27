import * as userActions from "../actions/user.action";
import { User } from "../../models/user.model";

export type UserAction = userActions.AllUserActions;

const defaultUser = new User(null, "GUEST");

/// Reducer function
export function userReducer(state: User = defaultUser, action: UserAction) {
  switch (action.type) {
    case userActions.GET_USER:
      return { ...state, loading: true };

    case userActions.AUTHENTICATED:
      return { ...state, ...action.payload, loading: false };
    case userActions.NOT_AUTHENTICATED:
      return { ...state, ...defaultUser, loading: false };
    case userActions.GOOGLE_LOGIN:
      return { ...state, loading: true };
    case userActions.AUTH_ERROR:
      return { ...state, ...action.payload, loading: false };
    case userActions.LOGOUT:
      return { ...state, loading: true };
  }
}
