import { Component, ElementRef, input, OnChanges, SimpleChanges } from '@angular/core';
import { dummyFoodItems } from '../../dummyFoodList';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dummyRestaurants } from '../../dummyRestaurantList';
import { RestaurantCardComponent } from '../../components/restaurant-card/restaurant-card.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuItemComponent , FormsModule,CommonModule ,RestaurantCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  foodItems = dummyFoodItems;
  inputText!: string;
  filteredFoodItem = this.foodItems;
  restaurants = dummyRestaurants;
  filteredRestaurants = this.restaurants;

  searchBtn(){
    this.filteredFoodItems();
  }

  filteredFoodItems() {
    if(this.inputText===''){
      this.filteredFoodItem = this.foodItems;
      this.filteredRestaurants = this.restaurants;
    }
     this.filteredFoodItem =  this.foodItems.filter(foodItem =>
      foodItem.name.toLowerCase().includes(this.inputText.toLowerCase())
    );
    this.filteredRestaurants = this.restaurants.filter(x=>
      x.name.toLowerCase().includes(this.inputText.toLowerCase())
    );
  }
  
}
