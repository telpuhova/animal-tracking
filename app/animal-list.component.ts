import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)='onChange($event.target.value)'>
    <option value="allAnimals">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals" selected="selected">Mature Animals</option>
  </select>

    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity">
        <strong>{{currentAnimal.name}}</strong>
        <br>
        <span class='label'>species:</span> {{currentAnimal.species}}
        <br>
        <span class='label'>age:</span> {{currentAnimal.age}}
        <br>
        <span class='label'>diet:</span> {{currentAnimal.diet}}
        <br>
        <span class='label'>location:</span> {{currentAnimal.location}}
        <br>
        <span class='label'>caretakers:</span> {{currentAnimal.caretakers}}
        <br>
        <span class='label'>sex:</span> {{currentAnimal.sex}}
        <br>
        <span class='label'>like:</span> {{currentAnimal.like}}
        <br>
        <span class='label'>dislike:</span> {{currentAnimal.dislike}}
        <br>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
        <br>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByMaturity: string = 'allAnimals';

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }
}
