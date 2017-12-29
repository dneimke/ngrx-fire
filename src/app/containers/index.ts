import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home/home.component";
import { SecretComponent } from "./secret/secret.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

export const containers: any[] = [
  AppComponent,
  HomeComponent,
  RxjsComponent,
  SecretComponent
];

export * from "./app/app.component";
export * from "./home/home.component";
export * from "./secret/secret.component";
export * from "./rxjs/rxjs.component";
