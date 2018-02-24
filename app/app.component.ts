import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
  <h1>Animal tracking</h1>
    <hr class="line">
    <div class="row">

      <div class="col-sm-5">
        <animal-list [childAnimalList]='masterAnimalList' (clickSender)='editAnimal($event)'></animal-list>
        <hr>
      </div>

      <div class="col-sm-5 custom-well">
        <edit-animal [childSelectedAnimal]='selectedAnimal' (doneButtonClickedSender)='finishedEditing()'></edit-animal>

        <new-animal [newFormDisplayedChild]="newFormDisplayed" (newAnimalSender)='addAnimal($event)'></new-animal>

      </div>
    </div>

  </div>
  `
})


export class AppComponent {
  newFormDisplayed: boolean = true;
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 1, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
    this.newFormDisplayed = false;
  }

  finishedEditing() {
    this.selectedAnimal = null;
    this.newFormDisplayed = true;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
