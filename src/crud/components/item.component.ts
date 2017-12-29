import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as fromModels from "../models";

@Component({
  selector: "item",
  template: `
    <div *ngIf="item$">
        <h1>{{ (item$ | async)?.name }}</h1>
    </div>
  `,
  styleUrls: []
})
export class ItemComponent {
  @Input() item$: Observable<fromModels.Item>;

  constructor() {}
}
