import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <ul>
      <li *ngFor="let currentAnimal of animals">
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
        <button (click)="editAnimal(currentAnimal)">Edit!</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  animals: Animal[] = [
    new Animal('Arctic Fox', "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
  ];

}
