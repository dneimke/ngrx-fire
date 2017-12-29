import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import * as fromModels from "../../models";
import * as fromServices from "../../services";

@Component({
  selector: "rxjs",
  template: `
    <h2>Home</h2>
    <div>
      <button (click)="add()">Add</button>
    </div>
    <item-list [items$]="items$"
        (selected)="onSelect($event)"
        (update)="onUpdate($event)"
        (remove)="onDelete($event)">
    </item-list>
    <hr />
    <h3>Selected</h3>
    <item [item$]="selectedItem"></item>

    <p><a routerLink="/home">Navigate to home</a></p>
  `,
  styleUrls: []
})
export class RxjsComponent implements OnInit {
  items$: Observable<fromModels.Item[]>;
  selectedItem: Observable<fromModels.Item>;

  constructor(private itemService: fromServices.ItemService) {}

  ngOnInit() {
    this.items$ = this.itemService.getItems();
  }

  add() {
    const name = prompt("Enter name.");
    this.itemService.add({
      name: name
    });
  }

  onUpdate(item: fromModels.Item) {
    const name = prompt("Enter new name.");
    item.name = name;

    this.itemService.update(item);
  }

  onDelete(item: fromModels.Item) {
    this.itemService.delete(item);
  }

  onSelect(item: fromModels.Item) {
    this.selectedItem = this.itemService.get(item.id);
  }
}
