import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import * as fromRoot from "../../../app/store";
import * as itemActions from "../actions/items.action";
import * as fromServices from "../../services";

@Injectable()
export class ItemsEffects {
  constructor(
    private actions$: Actions,
    private itemService: fromServices.ItemService
  ) {}

  @Effect()
  loadItems$ = this.actions$.ofType(itemActions.LOAD_ITEMS).pipe(
    switchMap(() => {
      return this.itemService
        .getItems()
        .pipe(
          map(items => new itemActions.LoadItemsSuccess(items)),
          catchError(error => of(new itemActions.LoadItemsFail(error)))
        );
    })
  );

  @Effect()
  createItem$ = this.actions$.ofType(itemActions.CREATE_ITEM).pipe(
    map((action: itemActions.CreateItem) => action.payload),
    switchMap(item => {
      return this.itemService
        .add(item)
        .pipe(
          map(item => new itemActions.CreateItemSuccess({ id: item })),
          catchError(error => of(new itemActions.CreateItemFail(error)))
        );
    })
  );

  @Effect()
  createItemSuccess$ = this.actions$
    .ofType(itemActions.CREATE_ITEM_SUCCESS)
    .pipe(
      map((action: itemActions.CreateItemSuccess) => action.payload),
      map(item => {
        return new fromRoot.Go({
          path: ["/crud/rxjs"] // path: ["/products", item]
        });
      })
    );

  @Effect()
  updateItem$ = this.actions$.ofType(itemActions.UPDATE_ITEM).pipe(
    map((action: itemActions.UpdateItem) => action.payload),
    switchMap(item => {
      return this.itemService
        .update(item)
        .pipe(
          map(item => new itemActions.UpdateItemSuccess(item)),
          catchError(error => of(new itemActions.UpdateItemFail(error)))
        );
    })
  );

  @Effect()
  removeItem$ = this.actions$.ofType(itemActions.REMOVE_ITEM).pipe(
    map((action: itemActions.RemoveItem) => action.payload),
    switchMap(item => {
      return this.itemService
        .delete(item)
        .pipe(
          map(() => new itemActions.RemoveItemSuccess(item)),
          catchError(error => of(new itemActions.RemoveItemFail(error)))
        );
    })
  );

  @Effect()
  selectItem$ = this.actions$.ofType(itemActions.SELECT_ITEM).pipe(
    switchMap((action: itemActions.SelectItem) => {
      return this.itemService
        .get(action.payload)
        .pipe(
          map(item => new itemActions.SelectItemSuccess(item)),
          catchError(error => of(new itemActions.LoadItemsFail(error)))
        );
    })
  );

  @Effect()
  handleItemSuccess$ = this.actions$
    .ofType(itemActions.UPDATE_ITEM_SUCCESS, itemActions.REMOVE_ITEM_SUCCESS)
    .pipe(
      map(pizza => {
        return new fromRoot.Go({
          path: ["/crud/rxjs"]
        });
      })
    );
}
