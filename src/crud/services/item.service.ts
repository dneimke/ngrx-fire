import { Injectable } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";
import "rxjs/add/observable/throw";

import * as fromModels from "../models";

@Injectable()
export class ItemService {
  private itemsCollection$: AngularFirestoreCollection<fromModels.Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection$ = this.afs.collection<fromModels.Item>("items");
  }

  getItems(): Observable<fromModels.Item[]> {
    return this.itemsCollection$.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as fromModels.Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  get(id: string): Observable<fromModels.Item> {
    return this.afs
      .collection<fromModels.Item>("items")
      .doc(id)
      .snapshotChanges()
      .map(doc => {
        return doc.payload.data() as fromModels.Item;
      });
  }

  add(item: fromModels.Item) {
    this.itemsCollection$.add(item);
  }

  delete(item: fromModels.Item) {
    const id = item.id;

    this.afs
      .collection<fromModels.Item>("items")
      .doc(id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }

  update(item: fromModels.Item) {
    const id = item.id;
    var docRef = this.afs.collection<fromModels.Item>("items").doc(id);
    docRef.set(item);
  }
}
