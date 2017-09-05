import {Component, OnInit} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DishService} from '../dish.service';
import {Dish} from '../dish';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css'],
  providers: [DishService]
})
export class AddDishComponent implements OnInit {
  dishes: Dish[];
  constructor(private dishService: DishService) {}
  date1: Date;
   date2: Date;

  onChanged(form): void {
    this.dishService.create(form)
      .then(dish => {
        this.dishes.push(dish);
      });
  }


  ngOnInit(): void {
    this.dishService.getDishes().then(dishes => this.dishes = dishes);
  }

}
