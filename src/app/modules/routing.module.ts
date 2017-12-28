import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import * as fromContainers from "../containers";
import * as fromAuth from "../../auth";

// routes
export const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: fromContainers.HomeComponent },
  {
    path: "secret",
    component: fromContainers.SecretComponent
    // canActivate: [fromAuth.AuthGuard]
  }
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
