import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="filter-by">
    Filter by: <select (change)="onChange($event.target.value)">
      <option value="allMeals" selected="selected">All Meals</option>
      <option value="overFiveHundred">Over 500 Calories</option>
      <option value="underFiveHundred">Under 500 Calories</option>
    </select>
  </div>
  <div class="meals">
    <div class="meal" *ngFor="let meal of childMealList | calories:filterByCalories">
      <h3 class="meal-name">{{meal.name}}</h3>
      <p class="meal-details">{{meal.details}}</p>
      <p class="meal-calories"><strong>{{meal.calories}}</strong> calories</p>
      <div class="buttons">
        <div class="edit" (click)="editMealClicked(meal)"><img src="../resources/images/edit.png" alt="edit"></div>
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
