import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h1>Animal tracking</h1>

    <animal-list></animal-list>

  </div>
  `
})


export class AppComponent {
  // selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', "Moon2", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince2", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
  ];

  editAnimal(clickedAnimal) {
    alert('editAnimal');
    // this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    alert('finishedEditing');
    // this.selectedTask = null;
  }
}
