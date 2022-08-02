import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/all-products/products.component';
import { ProductComponent } from './components/product/component.product';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductDetailComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ProductsRoutingModule,
        MaterialModule
      ]
})
export class ProductsModule{

}