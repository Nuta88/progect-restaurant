import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {DishService} from '../dish.service';
import {Dish} from '../dish'

@Component({
  selector: 'app-edit-dish-price',
  templateUrl: './edit-dish-price.component.html',
  styleUrls: ['./edit-dish-price.component.css', '../add-dish/add-dish.component.css']
})
export class EditDishPriceComponent implements OnInit {
     captionDishes = "assets/images/captionDishes.png";

  chooseDish = {};

  modalWindow(dish): any {this.chooseDish = dish}

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