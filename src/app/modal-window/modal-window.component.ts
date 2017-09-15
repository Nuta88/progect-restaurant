import {Component, ViewChild, EventEmitter, Input, Output, ElementRef} from '@angular/core';
import {FormsModule, FormGroup, FormControl,  Validators} from '@angular/forms'
import {Dish} from '../dish';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent {
    myFormModal: FormGroup;

    @Input() dishName: Dish;

    @ViewChild('closeBtn') closeBtn: ElementRef;

    constructor() {

        this.myFormModal = new FormGroup({

            "name": new FormControl("", [
                Validators.required,
                Validators.pattern("^[a-zA-Z\s-]+$")
            ]),
            "imgURL": new FormControl(),
            "id": new FormControl(),
            "price": new FormControl(),
            "calendar1": new FormControl(),
            "calendar2": new FormControl()
        });
    }

    private closeModal(): void {
        this.closeBtn.nativeElement.click();
    }
  
      addName(form){
      this.dishName.name = form.name;
    }

    @Output() onChanged = new EventEmitter<any>();
    onSubmit(form) {
        this.onChanged.emit(form);
        this.closeModal();
    }
}

