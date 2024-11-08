import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dummyRestaurants } from '../../dummyRestaurantList';
import { CommonModule } from '@angular/common';
import { RestaurantMenuItemsComponent } from '../../components/restaurant-menu-items/restaurant-menu-items.component';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule,RestaurantMenuItemsComponent ],
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantId!: number;  // Define as number
  restaurant! : any; // Assuming restaurant is of type `any`, replace with actual type if available

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the 'id' from the route parameters and convert to a number
    this.route.paramMap.subscribe(params => {
      this.restaurantId = +params.get('id')!;  // Use unary + to convert to number
    });
    
    // Assuming dummyRestaurants is an array of restaurant objects with an 'id' property
    this.restaurant = dummyRestaurants.filter(x => x.id === this.restaurantId);
    this.restaurant = this.restaurant[0];
  }
}
