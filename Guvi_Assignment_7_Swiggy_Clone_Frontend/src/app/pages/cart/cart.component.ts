import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemsComponent } from "../../components/cart-items/cart-items.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
  sum :number = 0;
  ngOnInit(){
    console.log(this.currentCart);
    for(let item of this.currentCart){
      this.sum += item.itemPrice*item.itemQuantity;
    }
  }
  checkOut(){
  }
}
