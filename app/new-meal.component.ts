import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class="new-form">

      <h2>New Meal</h2>

      <div class="new-form-input">
        <label>Name:</label>
        <input #newName>
      </div>
      <div class="new-form-input">
        <label>Details:</label>
        <input #newDetails>
      </div>
      <div class="new-form-input">
        <label>Calories:</label>
        <input #newCalories>
      </div>

      <button (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add Meal</button>

    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
