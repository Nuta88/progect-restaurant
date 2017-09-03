import { Component, Input, OnInit } from '@angular/core';
import {Dish} from '../dish';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  constructor() { }

   @Input() userName: string;
  ngOnInit() {
  }

}
