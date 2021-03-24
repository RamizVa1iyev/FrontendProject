import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
     let item = CartItems.find(c=>c.product.productId===product.productId);
     if(item){
       item.quantity++;
     }
     else{
       let cartItem:CartItem={quantity:1,product:product}
       CartItems.push(cartItem)
     }
  }
  getCartItems():CartItem[]{
    return CartItems;
  }
  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1)
 }
}
