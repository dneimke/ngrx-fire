import { NgModule } from "@angular/core";

import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers, effects, CustomRouterStateSerializer } from "../store";

// not used in production
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from "ngrx-store-freeze";

import * as fromRoot from "../index";
const isDevelopment = !fromRoot.environment.production;

export const metaReducers: MetaReducer<any>[] = isDevelopment
  ? [storeFreeze]
  : [];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    isDevelopment ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  declarations: [],

  bootstrap: []
})
export class NgrxModule {}
