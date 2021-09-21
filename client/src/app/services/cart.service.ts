import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../shared/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any= [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProducts(car: any){
    this.cartItemList.push(...car);
    this.productList.next(car);
  }
  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(): number{
    let total = 0;
    this.cartItemList.map((car: Car) =>{
      total += car.price
    })
    return total;
  }
  removeCartItem(product: any){
    this.cartItemList.map((x: any, index: any)=>{
      if(product.id === x.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
}
