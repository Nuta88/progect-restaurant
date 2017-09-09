import {Component, OnInit} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DishService} from '../dish.service';
import {Dish} from '../dish';

@Component({
    selector: 'app-add-dish',
    templateUrl: './add-dish.component.html',
    styleUrls: ['./add-dish.component.css', '../../assets/images/foundation.min.css'],
    providers: [DishService]
})
export class AddDishComponent implements OnInit {
    menu = "assets/images/menuRestaurant.jpg";
    kitchen = "assets/images/kitchen.jpg";
    dishes: Dish[];
    constructor(private dishService: DishService) { }

    onChanged(form): void {
        this.dishService.create(form)
            .then(dish => {
                this.dishes.push(dish);
            });
    }

    date3: Date;

    ngOnInit(): void {
        this.dishService.getDishes().then(dishes => this.dishes = dishes);
    }

}
