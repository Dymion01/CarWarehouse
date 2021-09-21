import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../shared/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: Car[]= [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProducts(car: any){
    this.cartItemList.push(...car);
    this.productList.next(car);
  }
  addToCart(car: Car){
    this.cartItemList.push(car);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice(){
    let total = 0;
    this.cartItemList.map((car: Car) =>{
      total += car.price
    })
  }
  removeCartItem(car: Car){
    this.cartItemList.map((x: Car, index:any)=>{
      if(car.id === x.id){
        this.cartItemList.slice(index,1);
      }
    })
  }
}
