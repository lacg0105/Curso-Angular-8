import { Injectable } from '@angular/core';
import { Order } from './../../../admin/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders: Order[] = [
    {
      id: '1',
      idProduct: '1',
      totalAmount: 5000
    },
    {
      id: '2',
      idProduct: '2',
      totalAmount: 6000
    },
    {
      id: '3',
      idProduct: '3',
      totalAmount: 400
    },
    {
      id: '4',
      idProduct: '4',
      totalAmount: 8000
    }
  ];

  constructor() { }

  getAllOrders(){
    return this.orders;
  }

  deleteOrder(id: string){
    const index = this.orders.findIndex(order => order.id === id);
    this.orders.splice(index, 1);
    return this.orders = [...this.orders];
  }
}
