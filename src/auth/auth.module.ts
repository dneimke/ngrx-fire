import { NgModule } from "@angular/core";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AngularFireAuthModule } from "angularfire2/auth";

import * as fromStore from "./store";

@NgModule({
  imports: [
    AngularFireAuthModule,
    EffectsModule.forFeature([fromStore.UserEffects]),
    StoreModule.forFeature("user", fromStore.userReducer)
  ],
  exports: [],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class AuthModule {}
