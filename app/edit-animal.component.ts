import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
  <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>

      <div class='editAnimalLabel'>Edit Animal:</div>
      <br>
      <label>name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <br>
      <label>species:</label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <br>
      <label>age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <br>
      <label>diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet">
      <br>
      <label>location:</label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <br>
      <label>caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <br>
      <label>sex:</label>
      <input [(ngModel)]="childSelectedAnimal.sex">
      <br>
      <label>like:</label>
      <input [(ngModel)]="childSelectedAnimal.like">
      <br>
      <label>dislike:</label>
      <input [(ngModel)]="childSelectedAnimal.dislike">
      <br>

      <button (click)="doneButtonClicked()">Done</button>
  </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
