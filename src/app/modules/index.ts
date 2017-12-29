import { FirebaseModule } from "./firebase.module";
import { NgrxModule } from "./ngrx.module";

export const modules: any[] = [FirebaseModule, NgrxModule];

export * from "./firebase.module";
export * from "./ngrx.module";
