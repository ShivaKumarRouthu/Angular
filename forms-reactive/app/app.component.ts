import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  projectStatus = ['Stable', 'Critical', 'Finished'];
  projectForm:FormGroup


  ngOnInit(){
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.fobidProjectNameValidator]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Critical', Validators.required)
      
    })

  }

  fobidProjectNameValidator(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test') {
      return {'forbidenName': true};
    }
    else {
      return null;
    }
  }
}


// export class AppComponent implements OnInit {
//   genders = ['Male', 'Female'];
//   forbiddenUserNames = ['shiva'];
//   signUpForm: FormGroup

//   ngOnInit(){
//     this.signUpForm = new FormGroup({
//       'userdata': new FormGroup({
//         'username': new FormControl(null, [Validators.required, this.forbiddenUserNameValidator.bind(this)]),
//         'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
//       }),
//       'gender': new FormControl('Male'),
//       'hobbies': new FormArray([])
//     })
//   }

//   onSubmit(){
//     console.log(this.signUpForm);
//   }

//   onAddHobby(){
//     const control = new FormControl(null, Validators.required);
//     (<FormArray>this.signUpForm.get('hobbies')).push(control);
//   }

//   forbiddenUserNameValidator(formControl: FormControl): {[s: string]: boolean}{
//     if(this.forbiddenUserNames.indexOf(formControl.value) !== -1) {
//       return {'nameIsForbidden': true};
//     }
//     return null;
//   }

//   forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if(control.value === 'email@email.com'){
//           resolve({'emailIsForbidden':true});
//         } else {
//           reject(null);
//         }
//       }, 2000);
//     });
//     return promise;
//   }
  
// }
