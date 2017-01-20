import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="meals">
    <div class="meal" *ngFor="let meal of childMealList">
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
}
