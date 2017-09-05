import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdDatepickerModule} from '@angular/material';

import {DishService} from '../dish.service';
import {Dish} from '../dish';

@Component({
  selector: 'app-form-add-dish',
  templateUrl: './form-add-dish.component.html',
  styleUrls: ['./form-add-dish.component.css']
})
export class FormAddDishComponent {

  @Output() onChanged = new EventEmitter<any>();
  onSubmit(form) {
    this.onChanged.emit(form);
  }
}
