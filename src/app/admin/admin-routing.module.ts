import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashComponent } from './components/dash/dash.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { LoginComponent } from './components/login/login/login.component';
import { UserRecordComponent } from './components/user-record/user-record.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children:[
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'dash',
        component: DashComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'login/record',
        component: UserRecordComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
