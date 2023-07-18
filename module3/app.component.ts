import { Component } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payments';

  readonly myName = 'Matt';
  greeting = `hello ${this.myName}`;

  myFunction() {
      const myNumber: number = 1;
      const myAge = 21;
      //myAge = 'a';
      const user = this.myName;

      const myArray1: number[] = [];
      const myArray2: Array<number> = [1,2,3];

      const secondItem = myArray2[1];
      myArray2.push(4);
      const lastItem = myArray2.pop();

      const first2Items = myArray2.slice(0,1);

      //remove first item:
      myArray2.splice(0,1);

  }

  addTwoNumbers(first:number, second:number) : string {
    return "the total is " + first+second;
  }

matt: Person = {
  id: 1,
  name: "Matt", 
  setStatus : (status) => {console.log(`status set to ${status}`)}
}  

sally: Person = {
  id: 2,
  name: "Sally", 
  phone: "112233",
  setStatus : (status) => {console.log(`status set to ${status}`)}
}  

}

