import { Component, OnInit } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

class Item {
  uid$?: string;
  name?: string;
}

@Component({
  selector: "rxjs",
  template: `
    <h2>Home</h2>
    <div>
      <button (click)="add()">Add</button>
    </div>
    <div>
      <ul>
        <li class="text" *ngFor="let item of items$ | async">
            {{item.name}}
        </li>
      </ul>
    <div>

    <p><a routerLink="/home">Navigate to home</a></p>
  `,
  styleUrls: []
})
export class RxjsComponent implements OnInit {
  private counter = 1;
  private itemsCollection$: AngularFirestoreCollection<Item>;
  items$: Observable<Item[]>;

  private selectedItemDoc$: AngularFirestoreDocument<Item>;
  selectedItem$: Observable<Item>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.itemsCollection$ = this.afs.collection<Item>("items");
    this.items$ = this.itemsCollection$.valueChanges();
  }
  
  add() {
    const i = this.counter++;
    this.itemsCollection$.add({
      name: `Item: ${i}`;
    });
  }
}
