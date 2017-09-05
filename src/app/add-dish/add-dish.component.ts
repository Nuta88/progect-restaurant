import {Component, OnInit} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdDatepickerModule} from '@angular/material';

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


  onChanged(form): void {
    form.name = form.name.trim();
    form.imgURL = form.imgURL.trim();
    if ((!form.name) && (!form.imgURL) && (!form.imgURL)) {return;}
    this.dishService.create(form)
      .then(dish => {
        this.dishes.push(dish);
      });
  }


  ngOnInit(): void {
    this.dishService.getDishes().then(dishes => this.dishes = dishes);
  }

}
