import {Component, ViewChild, EventEmitter, Input, Output, ElementRef} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators} from '@angular/forms'
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

      "nameDish": new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z\s-]+$")
      ])
    });
  }

    private closeModal(): void {
        this.closeBtn.nativeElement.click();
    }

    @Output() onChanged = new EventEmitter<any>();
    onSubmit(form) {
        this.onChanged.emit(form);
        console.log(form.name);
        this.closeModal();
    }


}
