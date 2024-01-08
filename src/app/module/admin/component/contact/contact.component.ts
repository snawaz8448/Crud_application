import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servives/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactinfoform!:FormGroup
  name=new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+([ '-][a-zA-Z]+)*$/)])
  message=new FormControl('',[Validators.required,Validators.minLength(50)])
  email=new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)])

  constructor( private loginservice:LoginService ) { }

  ngOnInit(): void {
        this.contactinfoform= new FormGroup(
          {
             name:this.name,
             email:this.email,
             message:this.message
          }
        )
  }
  sendmsg(){
  let postMessage={
    name:this.name.value,
    email:this.email.value,
    message:this.message.value
 }
 this.contactinfoform.markAllAsTouched()
 if(this.contactinfoform.valid){
 this.loginservice.messagedata(postMessage).subscribe((res)=>console.log(res))
 this.contactinfoform.reset()

 }
  }



  getErrorMessage(control: any, msg: any): any {
    if (control.hasError('required')) {
      return msg + ' is required.';
    } else if (control == this.name) {
      return this.name.hasError('minlength')
        ? 'Name should be of min 2 character.'
        : 'Please enter a valid ' + msg;
    } else if (control == this.message) {
      return this.message.hasError('minlength')
        ? 'Please enter minimum 100 lenght.'
        : 'Please enter minimum 100 lenght.';
    } else if (control == this.email) {
      return this.email.hasError('pattern')
        ? 'Please enter a valid  email.'
        : 'Please enter correct email';
    }
  }

}
