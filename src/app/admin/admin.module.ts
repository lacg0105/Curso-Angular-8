import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashComponent } from './components/dash/dash.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormProductComponent } from './components/form-product/form-product.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, TableComponent, DashComponent, ProductsListComponent, OrdersComponent, FormProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
