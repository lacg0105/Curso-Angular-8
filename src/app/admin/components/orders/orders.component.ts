import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../../core/services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders = [];
  displayedColumns: string[] = ['id', 'idProduct', 'totalAmount', 'actions'];

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders(){
    this.orders = this.ordersService.getAllOrders();
  }

  deleteOrder(id: string){
    this.orders = this.ordersService.deleteOrder(id);
  }

}
