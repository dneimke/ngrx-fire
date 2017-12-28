import { NgModule } from "@angular/core";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AngularFireAuthModule } from "angularfire2/auth";

import * as fromStore from "./store";

// guards
import * as fromGuards from "./guards";

@NgModule({
  imports: [
    AngularFireAuthModule,
    EffectsModule.forFeature([fromStore.UserEffects]),
    StoreModule.forFeature("auth", fromStore.reducers)
  ],
  exports: [...fromGuards.guards],
  declarations: [...fromGuards.guards],
  providers: [],
  bootstrap: []
})
export class AuthModule {}
