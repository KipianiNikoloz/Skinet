import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopComponent } from './shop.component';

const routes: Route[] = [
  { path: '', component: ShopComponent },
  { path: ':id', component: ProductDetailComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule { }
