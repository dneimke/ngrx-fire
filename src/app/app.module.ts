import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import * as fromModules from "./modules";
import * as fromContainers from "./containers";
import * as fromAuth from "../auth";

@NgModule({
  declarations: [fromContainers.containers],
  imports: [BrowserModule, fromModules.modules, fromAuth.AuthModule],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule {}
