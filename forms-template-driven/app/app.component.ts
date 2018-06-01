import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['Male', 'Female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'teacher';

  // onSubmit(form: NgForm){
  //   console.log('submitted');
  //   console.log(form);
  //   console.log('--------')
  // }

  onSubmit(){
    console.log(this.signUpForm);
  }
}

