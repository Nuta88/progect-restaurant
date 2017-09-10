import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {DishService} from '../dish.service';
import {Dish} from '../dish';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css', '../add-dish/add-dish.component.css']
})
export class EditDishComponent implements OnInit {
     captionDishes = "assets/images/captionDishes.png";

  name = {};

  modalWindow(dish): any {this.name = dish}

  dishes: Dish[];


  constructor(private dishService: DishService) {}

  delete(dish: Dish): void {
    this.dishService
      .delete(dish.id)
      .then(() => {
        this.dishes = this.dishes.filter(h => h !== dish);
      });
  }

  onChanged(form) {
    this.dishService.update(form)
  }


  ngOnInit(): void {
    this.dishService.getDishes().then(dishes => this.dishes = dishes);
  }
}