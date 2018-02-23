import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <br>
    <h3>New Animal</h3>

    <div>
        <label>name:</label>
        <input #name>
        <br>
        <label>species:</label>
        <input #species>
        <br>
        <label>age:</label>
        <input #age>
        <br>
        <label>diet:</label>
        <input #diet>
        <br>
        <label>location:</label>
        <input #location>
        <br>
        <label>caretakers:</label>
        <input #caretakers>
        <br>
        <label>sex:</label>
        <input #sex>
        <br>
        <label>like:</label>
        <input #like>
        <br>
        <label>dislike:</label>
        <input #dislike>
        <br>

        <button (click)="submitForm(name.value, species.value, age.value, diet.value, location.value, caretakers.value, sex.value, like.value, dislike.value); name.value=''; species.value=''; age.value=''; diet.value=''; location.value=''; caretakers.value=''; sex.value=''; like.value=''; dislike.value=''">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike);
    this.newAnimalSender.emit(newAnimal);
  }
}
