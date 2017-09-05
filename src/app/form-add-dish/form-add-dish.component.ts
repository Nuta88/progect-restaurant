import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule, FormGroup, FormControl, Validators} from '@angular/forms'
import {CalendarModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';

import {DishService} from '../dish.service';
import {Dish} from '../dish';

@Component({
  selector: 'app-form-add-dish',
  templateUrl: './form-add-dish.component.html',
  styleUrls: ['./form-add-dish.component.css']
})
export class FormAddDishComponent {
  myForm: FormGroup;


  constructor() {
    this.myForm = new FormGroup({

      "name": new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z\s-]+$")
      ]),
      "imgURL": new FormControl("", [
        Validators.required,
        Validators.pattern("https?://.+")
      ]),
      "price": new FormControl(0, [
        Validators.required,
        Validators.pattern("^[ 0-9]+$")
      ])
    });
  }

  @Output() onChanged = new EventEmitter<any>();
  onSubmit(form) {
    this.onChanged.emit(form);
  }
}
