import { FirebaseModule } from "./firebase.module";
import { NgrxModule } from "./ngrx.module";
import { RoutingModule } from "./routing.module";

export const modules: any[] = [FirebaseModule, NgrxModule, RoutingModule];

export * from "./firebase.module";
export * from "./ngrx.module";
export * from "./routing.module";
