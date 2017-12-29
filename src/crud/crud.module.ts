import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// services
import * as fromServices from "./services";

// guards
import * as fromGuards from "./guards";

// store
import * as fromStore from "./store";

export const ROUTES: Routes = [
  {
    path: "rxjs",
    component: fromContainers.RxjsComponent,
    canActivate: [fromGuards.ItemsGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    EffectsModule.forFeature([fromStore.ItemsEffects]),
    StoreModule.forFeature("collections", fromStore.reducers)
  ],
  exports: [],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services, ...fromGuards.guards],
  bootstrap: []
})
export class CrudModule {}
