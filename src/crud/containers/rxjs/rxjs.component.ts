import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromStore from "../../store";
import { Item } from "../../models/item.model";
// import * as fromServices from "../../services";

@Component({
  selector: "rxjs",
  template: `
    <h2>Home</h2>
    <div>
      <button (click)="add()">Add</button>
    </div>
    <item-list [items$]="items$"
        (selected)="select($event)"
        (update)="update($event)"
        (remove)="delete($event)">
    </item-list>
    <hr />
    <h3>Selected</h3>
    <item [item$]="selectedItem$"></item>

    <p><a routerLink="/home">Navigate to home</a></p>
  `,
  styleUrls: []
})
export class RxjsComponent implements OnInit {
  items$: Observable<Item[]>;
  selectedItem$: Observable<Item>;

  constructor(private store: Store<fromStore.CollectionsState>) {}

  ngOnInit() {
    // this.items$ = this.itemService.getItems();
    this.items$ = this.store.select(fromStore.getAllItems);
    this.selectedItem$ = this.store.select(fromStore.getSelected);
  }

  add() {
    const name = prompt("Enter name.");
    // this.itemService.add(name);
    this.store.dispatch(new fromStore.CreateItem(name));
  }

  update(item: Item) {
    const name = prompt("Enter new name.");
    const updatedItem = { ...item, name };

    // this.itemService.update(updatedItem);
    this.store.dispatch(new fromStore.UpdateItem(updatedItem));
  }

  delete(item: Item) {
    // this.itemService.delete(item);
    const remove = window.confirm("Are you sure?");
    if (remove) {
      this.store.dispatch(new fromStore.RemoveItem(item));
    }
  }

  select(item: Item) {
    // this.selectedItem = this.itemService.get(item.id);
    const id = item.id;
    console.log("selected::", item);
    this.store.dispatch(new fromStore.SelectItem(id));
  }
}
