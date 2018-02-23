import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h1>Animal tracking</h1>

    <animal-list [childAnimalList]='masterAnimalList' (clickSender)='editAnimal($event)'></animal-list>

    <div *ngIf="selectedAnimal">
        <h3>{{selectedAnimal.name}}</h3>

        <h4>Edit Animal</h4>
        <label>name:</label>
        <input [(ngModel)]="selectedAnimal.name">
        <br>
        <label>species:</label>
        <input [(ngModel)]="selectedAnimal.species">
        <br>
        <label>age:</label>
        <input [(ngModel)]="selectedAnimal.age">
        <br>
        <label>diet:</label>
        <input [(ngModel)]="selectedAnimal.diet">
        <br>
        <label>location:</label>
        <input [(ngModel)]="selectedAnimal.location">
        <br>
        <label>caretakers:</label>
        <input [(ngModel)]="selectedAnimal.caretakers">
        <br>
        <label>sex:</label>
        <input [(ngModel)]="selectedAnimal.sex">
        <br>
        <label>like:</label>
        <input [(ngModel)]="selectedAnimal.like">
        <br>
        <label>dislike:</label>
        <input [(ngModel)]="selectedAnimal.dislike">
        <br>

        <button (click)="finishedEditing()">Done</button>
      </div>

  </div>
  `
})


export class AppComponent {
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
