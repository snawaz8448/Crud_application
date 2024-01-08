import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servives/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signupp:boolean=true;
  loginnn(){
    this.signupp=true
  }
  signupppp(){
    this.signupp=false
  }

  signupform:FormGroup
  loginform!: FormGroup;
  name = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z]*$/),
    Validators.minLength(2),
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^\s*([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,50})\s*$/
    ),
  ]);
  number = new FormControl('', [
    Validators.required,
    Validators.pattern(/^([0-9()-]{2,20})$/),
    Validators.minLength(10),
  ]);
  email1 = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^\s*([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,50})\s*$/
    ),
  ]);
  number1 = new FormControl('', [
    Validators.required,
    Validators.pattern(/^([0-9()-]{2,20})$/),
    Validators.minLength(10),
  ]);
  
  constructor(private loginservice: LoginService, public router: Router) {
    this.signupform = new FormGroup({
      name: this.name,
      email: this.email,
      number: this.number,
    });
  }
  ngOnInit(): void {
    this.loginform = new FormGroup({
      // name: this.name,
      email: this.email1,
      number: this.number1,
    });

    // console.log(this.loginform);
    if (localStorage.getItem('token')) {
      this.router.navigate(['admin']);
    }
  }
  login() {
    let postdata = {
      // name: this.name.value,
      email: this.email1.value,
      number: this.number1.value,
    };

    this.loginform.markAllAsTouched();
    // console.log(this.loginform)
    if (this.loginform.valid) {
      this.loginservice.logindata(postdata).subscribe((res) => {
        console.log(res);
        if(res[0].number && res[0].email){
        this.router.navigate(['admin']);
        }
      });
      // this.route.navigate(['/admin']);
      this.loginform.reset();
    }
  }
  signup() {
    let postdata = {
      name: this.name.value,
      email: this.email.value,
      number: this.number.value,
    };

    this.signupform.markAllAsTouched();
debugger
    if (this.signupform.valid) {
      this.loginservice.signupdata(postdata).subscribe((res) => {
        console.log(res);
        this.router.navigate(['admin']);
      });
      // this.route.navigate(['/admin']);
      this.signupform.reset();
    }
  }

  getErrorMessage(control: any, msg: any): any {
    if (control.hasError('required')) {
      return msg + ' is required.';
    } else if (control == this.name) {
      return this.name.hasError('minlength')
        ? 'Name should be of min 2 character.'
        : 'Please enter a valid ' + this.name;
    } else if (control == this.number) {
      return this.number.hasError('minlength')
        ? 'Please enter a valid phone number.'
        : 'Please enter 10 digits phone number';
    } else if (control == this.email) {
      return this.email.hasError('pattern')
        ? 'Please enter a valid  email.'
        : 'Please enter correct email';
    }
  }
}
