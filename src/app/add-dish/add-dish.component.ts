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
    menu = "assets/images/menuRestaurant.jpg";
    kitchen = "assets/images/kitchen.jpg";
    meat = "assets/images/images.jpg";
    wine = "assets/images/imagew1.jpg";
    captionDishes = "assets/images/captionDishes.png";


    dishes: Dish[];
    constructor(private dishService: DishService) { }

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
