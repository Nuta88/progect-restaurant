import {Component, OnInit} from '@angular/core';
import { Location }                 from '@angular/common';
import { NgForm } from '@angular/forms';

import {DishService} from '../dish.service';
import {Dish} from '../dish';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {
  
  name={};
  
  modalWindow(dish): any {this.name=dish}

  dishes: Dish[]; 
  
  
  constructor(private dishService: DishService, private location: Location) {}

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
  
  goBack(): void {
   this.location.forward();
  }


  ngOnInit(): void {
    this.dishService.getDishes().then(dishes => this.dishes = dishes);
  }
}