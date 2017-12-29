import { Action } from "@ngrx/store";

import { Item } from "../../models/item.model";

// load items
export const LOAD_ITEMS = "[Collections] Load Items";
export const LOAD_ITEMS_FAIL = "[Collections] Load Items Fail";
export const LOAD_ITEMS_SUCCESS = "[Collections] Load Items Success";

export class LoadItems implements Action {
  readonly type = LOAD_ITEMS;
}

export class LoadItemsFail implements Action {
  readonly type = LOAD_ITEMS_FAIL;
  constructor(public payload: any) {}
}

export class LoadItemsSuccess implements Action {
  readonly type = LOAD_ITEMS_SUCCESS;
  constructor(public payload: Item[]) {}
}

// Create items
export const CREATE_ITEM = "[Collections] Create Items";
export const CREATE_ITEM_FAIL = "[Collections] Create Items Fail";
export const CREATE_ITEM_SUCCESS = "[Collections] Create Items Success";

export class CreateItem implements Action {
  readonly type = CREATE_ITEM;
  constructor(public payload: string) {}
}

export class CreateItemFail implements Action {
  readonly type = CREATE_ITEM_FAIL;
  constructor(public payload: any) {}
}

export class CreateItemSuccess implements Action {
  readonly type = CREATE_ITEM_SUCCESS;
  constructor(public payload: Item) {}
}

// Update items
export const UPDATE_ITEM = "[Collections] Update Items";
export const UPDATE_ITEM_FAIL = "[Collections] Update Items Fail";
export const UPDATE_ITEM_SUCCESS = "[Collections] Update Items Success";

export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM;
  constructor(public payload: Item) {}
}

export class UpdateItemFail implements Action {
  readonly type = UPDATE_ITEM_FAIL;
  constructor(public payload: any) {}
}

export class UpdateItemSuccess implements Action {
  readonly type = UPDATE_ITEM_SUCCESS;
  constructor(public payload: Item) {}
}

// Remove items
export const REMOVE_ITEM = "[Collections] Remove Items";
export const REMOVE_ITEM_FAIL = "[Collections] Remove Items Fail";
export const REMOVE_ITEM_SUCCESS = "[Collections] Remove Items Success";

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: Item) {}
}

export class RemoveItemFail implements Action {
  readonly type = REMOVE_ITEM_FAIL;
  constructor(public payload: any) {}
}

export class RemoveItemSuccess implements Action {
  readonly type = REMOVE_ITEM_SUCCESS;
  constructor(public payload: Item) {}
}

// Select item
export const SELECT_ITEM = "[Collections] Select Item";
export const SELECT_ITEM_FAIL = "[Collections] Select Item Fail";
export const SELECT_ITEM_SUCCESS = "[Collections] Select Item Success";

export class SelectItem implements Action {
  readonly type = SELECT_ITEM;
  constructor(public payload: string) {}
}

export class SelectItemFail implements Action {
  readonly type = SELECT_ITEM_FAIL;
  constructor(public payload: any) {}
}

export class SelectItemSuccess implements Action {
  readonly type = SELECT_ITEM_SUCCESS;
  constructor(public payload: Item) {}
}

// action types
export type ItemsAction =
  | LoadItems
  | LoadItemsFail
  | LoadItemsSuccess
  | CreateItem
  | CreateItemFail
  | CreateItemSuccess
  | UpdateItem
  | UpdateItemFail
  | UpdateItemSuccess
  | RemoveItem
  | RemoveItemFail
  | RemoveItemSuccess
  | SelectItem
  | SelectItemFail
  | SelectItemSuccess;
