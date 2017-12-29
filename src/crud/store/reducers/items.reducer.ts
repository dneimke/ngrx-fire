import * as fromActions from "../actions/items.action";
import { Item } from "../../models/item.model";

export interface ItemState {
  entities: { [id: string]: Item };
  loaded: boolean;
  loading: boolean;
  selected?: Item;
}

export const initialState: ItemState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromActions.ItemsAction
): ItemState {
  switch (action.type) {
    case fromActions.LOAD_ITEMS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.LOAD_ITEMS_SUCCESS: {
      const items = action.payload;

      const entities = items.reduce(
        (entities: { [id: string]: Item }, item: Item) => {
          return {
            ...entities,
            [item.id]: item
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromActions.SELECT_ITEM_SUCCESS: {
      const item = action.payload;

      const { [item.id]: selected } = state.entities;

      return {
        ...state,
        loading: false,
        loaded: true,
        selected
      };
    }

    case fromActions.LOAD_ITEMS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromActions.UPDATE_ITEM_SUCCESS:
    case fromActions.CREATE_ITEM_SUCCESS: {
      const item = action.payload;
      const entities = {
        ...state.entities,
        [item.id]: item
      };

      return {
        ...state,
        entities
      };
    }

    case fromActions.REMOVE_ITEM_SUCCESS: {
      const item = action.payload;
      const { [item.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities
      };
    }
  }

  return state;
}

export const getItemsEntities = (state: ItemState) => state.entities;
export const getItemsLoading = (state: ItemState) => state.loading;
export const getItemsLoaded = (state: ItemState) => state.loaded;
export const getSelected = (state: ItemState) => state.selected;
