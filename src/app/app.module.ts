import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { NgForm } from '@angular/forms';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {DishService} from './dish.service';
import {AddDishComponent} from './add-dish/add-dish.component';
import {EditDishComponent} from './edit-dish/edit-dish.component';
import {EditDishPriceComponent} from './edit-dish-price/edit-dish-price.component';
import {FormAddDishComponent} from './form-add-dish/form-add-dish.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDishComponent,
    EditDishComponent,
    EditDishPriceComponent,
    FormAddDishComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule {}
