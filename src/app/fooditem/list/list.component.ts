import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Food } from "../../models/food";
import { FooditemService } from "../../services/fooditem";
import { Router } from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public foods$: Observable<Array<Food>>;

  constructor(
    private router: Router,
    private fooditemService: FooditemService
  ) { }

  ngOnInit() {
    this.foods$ = this.fooditemService.getAll();
  }
}
