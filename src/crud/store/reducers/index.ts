import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromReducer from "./items.reducer";

export interface CollectionsState {
  items: fromReducer.ItemState;
}

export const reducers: ActionReducerMap<CollectionsState> = {
  items: fromReducer.reducer
};

export const getCollectionsState = createFeatureSelector<CollectionsState>(
  "collections"
);
