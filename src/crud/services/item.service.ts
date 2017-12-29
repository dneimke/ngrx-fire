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

import { Item } from "../models";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ItemService {
  private itemsCollection$: AngularFirestoreCollection<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection$ = this.afs.collection<Item>("items");
  }

  getItems(): Observable<Item[]> {
    return this.itemsCollection$.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  get(id: string): Observable<Item> {
    return this.afs
      .collection<Item>("items")
      .doc(id)
      .snapshotChanges()
      .map(doc => {
        return doc.payload.data() as Item;
      });
  }

  add(name: string): Observable<Item> {
    const subject = new Subject();

    const item = { name };

    const promise = this.itemsCollection$.add(item).then(docRefPromise => {
      const newItem = { id: docRefPromise.id, name: name };
      var docRef = this.afs.collection<Item>("items").doc(newItem.id);
      docRef.set(newItem);
      subject.next(newItem);
    });

    return subject.asObservable();
  }

  delete(item: Item): Observable<Item> {
    const subject = new Subject();

    var docRef = this.afs.collection<Item>("items").doc(item.id);

    docRef
      .delete()
      .then(() => subject.next())
      .catch(error => subject.error(error));

    return subject.asObservable();
  }

  update(item: Item): Observable<Item> {
    const id = item.id;
    var docRef = this.afs.collection<Item>("items").doc(id);
    docRef.set(item);

    return docRef.snapshotChanges().map(doc => {
      return doc.payload.data() as Item;
    });
  }
}
