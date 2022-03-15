import { Injectable } from '@angular/core';
import { Product } from './../../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 8000,
      description: "bla bla bla"
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoddie',
      price: 5000,
      description: "bla bla bla"
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 3000,
      description: "bla bla bla"
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 1000,
      description: "bla bla bla"
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Sticker 1',
      price: 900,
      description: "bla bla bla"
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Sticker 2',
      price: 700,
      description: "bla bla bla"
    },
  ]

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
