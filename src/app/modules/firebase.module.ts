import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { environment } from "../../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class FirebaseModule {}
