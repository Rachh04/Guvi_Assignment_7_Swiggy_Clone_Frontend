import { Component, Input } from '@angular/core';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input() restaurant!: any;
  
  toggleFavorite() {
    this.restaurant.favourites = !this.restaurant.favourites;
    console.log(this.restaurant);
  }
}
