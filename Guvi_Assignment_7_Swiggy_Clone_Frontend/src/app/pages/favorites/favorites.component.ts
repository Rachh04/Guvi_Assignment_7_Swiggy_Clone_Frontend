import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestaurantCardComponent } from '../../components/restaurant-card/restaurant-card.component';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { dummyRestaurants } from '../../dummyRestaurantList';
import { dummyFoodItems } from '../../dummyFoodList';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule , RestaurantCardComponent , MenuItemComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit{
  favouriteRestaurants = dummyRestaurants;
  favouriteFoodItems = dummyFoodItems;
  
  ngOnInit(): void {
    this.favouriteFoodItems = this.favouriteFoodItems.filter(x=>x.favourites===true);
    this.favouriteRestaurants =  this.favouriteRestaurants.filter(x=>x.favourites===true);
  }
}
