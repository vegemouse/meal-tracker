import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>
  <div class="meals">
    <div class="meal" *ngFor="let meal of meals">
      <h3>{{meal.name}}</h3>
      <p>{{meal.details}}</p>
      <p>{{meal.calories}}</p>
    </div>
  </div>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal("Burrito", "From the food carts!", 550),
    new Meal("Pad Thai", "My favorite meal", 450),
    new Meal("Ramen Noodles", "I was broke!", 320),
    new Meal("Falafel", "Home made", 480),
    new Meal("Burger & Fries", "Not the best choice...", 800)
  ]
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number) {

  }
}
