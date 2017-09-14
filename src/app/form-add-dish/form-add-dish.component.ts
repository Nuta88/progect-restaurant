import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule, FormGroup, FormControl, Validators} from '@angular/forms'

import {DishService} from '../dish.service';
import {Dish} from '../dish';

@Component({
  selector: 'app-form-add-dish',
  templateUrl: './form-add-dish.component.html',
  styleUrls: ['./form-add-dish.component.css']
})
export class FormAddDishComponent {

  myForm: FormGroup;
  date1: Date;
  date2: string;
  minDate: Date;
  selectDate(date) {
    let del = 6 - date.getDay();
    this.date2 = ((date.getDate() + del)+".0"+ (date.getMonth() + 1) + "." + date.getFullYear());
  }
  en: any;

  ngOnInit() {

    let today = new Date();
    this.minDate = new Date();
    this.minDate.setDate(today.getDate());

    this.en = {
      firstDayOfWeek: 0,
      dayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      dayNamesShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      dayNamesMin: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today',
      clear: 'Clear'
    };
  }

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
      "price": new FormControl("", [
        Validators.required,
        Validators.pattern("[1-9][0-9]{0,4}(\\.[0-9]{0,2}?)?")
      ]),
      "calendar1": new FormControl("",
        Validators.required),
      "calendar2": new FormControl("",
        Validators.required)
    });
  }

  ngAfterViewInit() {
    this.myForm.get('calendar1').setValue(this.date1);
    this.myForm.get('calendar2').setValue(this.date2);
  }


  @Output() onChanged = new EventEmitter<any>();
  onSubmit(form) {
    this.onChanged.emit(form);
  }
}
