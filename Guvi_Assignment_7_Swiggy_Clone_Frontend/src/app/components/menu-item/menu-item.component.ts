import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  
  @Input() food!: any;
  toggleFavorite() {
    this.food.favourites = !this.food.favourites;
    console.log(this.food);
  }
}
