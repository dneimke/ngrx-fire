import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import * as fromContainers from "../containers";

// routes
export const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: fromContainers.HomeComponent }
  // {
  //   path: "profile",
  //   loadChildren: "../profile/profile.module#ProfileModule"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class RoutingModule {}
