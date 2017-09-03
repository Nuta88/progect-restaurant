import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddDishComponent} from './add-dish/add-dish.component';
import {EditDishComponent} from './edit-dish/edit-dish.component';
import {EditDishPriceComponent} from './edit-dish-price/edit-dish-price.component';

const routes: Routes = [  {
    path: '',
    redirectTo: '/add-dish',
    pathMatch: 'full'
  },
  {
    path: 'addDish',
    component: AddDishComponent
  },
  {
    path: 'editDish',
    component: EditDishComponent
  },
  {
    path: 'editDishPrice',
    component: EditDishPriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}