import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  userInput = '';
  successMessage = false;

  onChangeInput(value: string) {
    this.userInput = value;
    this.successMessage = this.randomText === this.userInput;
  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
  
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

}
