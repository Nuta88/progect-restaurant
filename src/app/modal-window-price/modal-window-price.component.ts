import {Component, ViewChild, EventEmitter, Input, Output, ElementRef} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators} from '@angular/forms'
import {CalendarModule} from 'primeng/primeng';
import {Dish} from '../dish';

@Component({
    selector: 'app-modal-window-price',
    templateUrl: './modal-window-price.component.html',
    styleUrls: ['./modal-window-price.component.css']
})
export class ModalWindowPriceComponent {

    @Input() selectDish: Dish;

    @ViewChild('closeBtn') closeBtn: ElementRef;

    date1: Date;
    date2: string;
    minDate: Date;
    selectDate(date) {
        let del = 6 - date.getDay();
        this.date2 = ((date.getDate() + del) + ".0" + (date.getMonth() + 1) + "." + date.getFullYear());
    }
    en: any;


    constructor() {
    }


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
