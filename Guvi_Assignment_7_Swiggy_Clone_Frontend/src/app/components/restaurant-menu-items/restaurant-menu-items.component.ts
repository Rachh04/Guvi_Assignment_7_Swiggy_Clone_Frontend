import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu-items',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-menu-items.component.html',
  styleUrls: ['./restaurant-menu-items.component.css']
})
export class RestaurantMenuItemsComponent {
  @Input() menu!: any;
  @Input() restaurant!: any; // Get the restaurant name as input

  quantity: number = 1;

  addToCart() {
    const cartItem = {
      restaurantName: this.restaurant.name,
      itemName: this.menu.name,
      itemPrice: this.menu.price,
      itemQuantity: this.quantity
    };
   


    // Retrieve the existing cart from localStorage or initialize a new array if empty
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const currentRest = existingCart.length === 0 ? '' : existingCart[0].restaurantName;

    if(currentRest !== '' && this.restaurant.name !== currentRest){
      alert("You cannot order from different Restaurants");
      return;
    }

    // Check if item already exists in the cart (by restaurant name and item name)
    const existingItemIndex = existingCart.findIndex((item: any) =>
      item.restaurantName === cartItem.restaurantName && item.itemName === cartItem.itemName
    );



    if (existingItemIndex !== -1) {
      // If item exists, update the quantity
      existingCart[existingItemIndex].itemQuantity += this.quantity;
    } else {
      // If item doesn't exist, add it to the cart
      existingCart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    console.log('Item added to cart:', cartItem);
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
