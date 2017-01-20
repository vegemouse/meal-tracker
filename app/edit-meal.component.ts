import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div class="edit-form" *ngIf="childSelectedMeal">
      <h2>Edit Meal</h2>
      <div class="edit-form-input">
        <label>Name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div class="edit-form-input">
        <label>Details:</label>
        <input [(ngModel)]="childSelectedMeal.details">
      </div>
      <div class="edit-form-input">
        <label>Calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter;

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
