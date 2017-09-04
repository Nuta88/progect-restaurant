import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Dish} from '../dish';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent {
  constructor() { }

   @Input() dishName: Dish;
  
  
    @Output() onChanged = new EventEmitter<any>();
  onSubmit(form) {
    this.onChanged.emit(form);
  }

}
