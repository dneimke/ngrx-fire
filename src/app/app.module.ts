import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import * as fromModules from "./modules";
import * as fromContainers from "./containers";
import * as fromAuth from "../auth";

// routes
export const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: fromContainers.HomeComponent },
  { path: "secret", component: fromContainers.SecretComponent },
  {
    path: "crud",
    loadChildren: "../crud/crud.module#CrudModule"
  }
];

@NgModule({
  declarations: [fromContainers.containers],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    fromAuth.AuthModule,
    fromModules.modules
  ],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule {}
