import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromItems from "../reducers/items.reducer";

import { Item } from "../../models/item.model";

export const getItemState = createSelector(
  fromFeature.getCollectionsState,
  (state: fromFeature.CollectionsState) => state.items
);

export const getItemsEntities = createSelector(
  getItemState,
  fromItems.getItemsEntities
);

export const getSelectedItem = createSelector(
  getItemsEntities,
  fromRoot.getRouterState,
  (entities, router): Item => {
    return router.state && entities[router.state.params.itemId];
  }
);

export const getAllItems = createSelector(getItemsEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

export const getItemsLoaded = createSelector(
  getItemState,
  fromItems.getItemsLoaded
);

export const getItemsLoading = createSelector(
  getItemState,
  fromItems.getItemsLoading
);

export const getSelected = createSelector(getItemState, fromItems.getSelected);
