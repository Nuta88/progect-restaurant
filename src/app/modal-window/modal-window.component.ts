import { Component, ViewChild, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import {Dish} from '../dish';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent {
  constructor() { }

   @Input() dishName: Dish;
  
  @ViewChild('closeBtn') closeBtn: ElementRef;
  
  private closeModal(): void {
        this.closeBtn.nativeElement.click();
    }

  
    @Output() onChanged = new EventEmitter<any>();
  onSubmit(form) {
    this.onChanged.emit(form);
    console.log(form.name);
    this.closeModal();
    
    //this.closeModal = false;
  }


}
