import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>

  <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>

  <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>

  <new-meal (newMealSender)="addMeal($event)"></new-meal>
  `
})

export class AppComponent {

  masterMealList: Meal[] = [
    new Meal("Burrito", "From the food carts!", 550),
    new Meal("Pad Thai", "My favorite meal", 450),
    new Meal("Ramen Noodles", "I was broke!", 320),
    new Meal("Falafel", "Home made", 480),
    new Meal("Burger & Fries", "Not the best choice...", 800)
  ];

  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
