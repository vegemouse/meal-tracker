import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All Meals</option>
    <option value="overFiveHundred">Over 500 Calories</option>
    <option value="underFiveHundred">Under 500 Calories</option>
  </select>
  <div class="meals">
    <div class="meal" *ngFor="let meal of childMealList | calories:filterByCalories">
      <h3>{{meal.name}}</h3>
      <p>{{meal.details}}</p>
      <p>{{meal.calories}}</p>
      <div class="buttons">
        <button (click)="editMealClicked(meal)">Edit</button>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editMealClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  filterByCalories = null;

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
