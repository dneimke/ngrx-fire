import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as fromModels from "../models";

@Component({
  selector: "item-list",
  template: `
    <div *ngIf="items$">
        <ul>
            <li class="text" *ngFor="let item of items$ | async">
                <a (click)="onSelect(item)">{{item.name}}</a> [<a (click)="onUpdate(item)">O</a>] [<a (click)="onDelete(item)">X</a>]
            </li>
        </ul>
    <div>
  `,
  styleUrls: []
})
export class ItemListComponent {
  @Input() items$: Observable<fromModels.Item[]>;

  @Output() selected = new EventEmitter<fromModels.Item>();
  @Output() update = new EventEmitter<fromModels.Item>();
  @Output() remove = new EventEmitter<fromModels.Item>();

  constructor() {}

  onSelect(item: fromModels.Item) {
    this.selected.emit(item);
  }

  onUpdate(item: fromModels.Item) {
    this.update.emit(item);
  }

  onDelete(item: fromModels.Item) {
    this.remove.emit(item);
  }
}
