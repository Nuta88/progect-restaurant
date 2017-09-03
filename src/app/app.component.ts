import {Component, OnInit} from '@angular/core';

import {DishService} from './dish.service';
import {Dish} from './dish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DishService]
})
export class AppComponent implements OnInit {

  urlLogo = "assets/images/logo.png";

  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) {}

  getDishes(): void {
    this.dishService.getDishes().then(dishes => this.dishes = dishes);
  }

  ngOnInit(): void {
    this.getDishes();
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }
}

