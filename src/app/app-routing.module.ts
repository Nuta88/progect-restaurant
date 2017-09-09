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
    path: 'add-dish',
    component: AddDishComponent
  },
  {
    path: 'edit-dish',
    component: EditDishComponent
  },
  {
    path: 'edit-dish-price',
    component: EditDishPriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}