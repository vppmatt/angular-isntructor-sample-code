import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  signupForm = new FormGroup({
    name : new FormControl(''),
    email: new FormControl('')
  });

  handleSubmit() : void {
    const data = this.signupForm.value;
    console.log("Send a rest request to the server now with data : ", data);
  }

}
