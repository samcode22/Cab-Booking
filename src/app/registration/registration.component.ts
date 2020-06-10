import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { DbconService } from '../dbcon.service';
import {User } from '../model/user';
import { VirtualTimeScheduler } from 'rxjs';
import { utf8Encode } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { MustMatch } from './match';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user:DbconService,private router: Router) { }
  register:FormGroup
  
  user1=new User()
  public msg:any;
  public n1:string;
  public n2:string;
  public n3:string;
  public n4:string;
  ngOnInit() {
//     function mobileno()
//     {
//         var mob=document.getElementById("contactno").value;
//         if(!mob.match(/^(\+\d{1,3}[- ]?)?\d{10}$/))
//             document.getElementById("error").innerHTML="mobileno not valid";
//     }
//     function checkpass()
//     {
//                 var pw=document.getElementById("pw").value;
//                         var cpw2=document.getElementById("cpw").value;
//                         //document.write(pw);
//                 if(pw!=cpw2)
//                                  document.getElementById("pass").innerHTML="both password must be same";
// //

//     }
$(".centered").fadeOut(1);
$(".centered").fadeIn(1000)

this.register = new FormGroup({
  name: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
     // <-- Here's how you pass in the custom validator.
  ]),
  uname:new FormControl('', [
    Validators.required,
    Validators.minLength(3),
     // <-- Here's how you pass in the custom validator.
  ]),
  pass:new FormControl('', [
    Validators.required,
    Validators.minLength(3),
     // <-- Here's how you pass in the custom validator.
  ]),
  contact:new FormControl('', [
    Validators.required,
    Validators.minLength(3),
     // <-- Here's how you pass in the custom validator.
  ]),
  email:new FormControl('', [
    Validators.required,
    Validators.minLength(3),
     // <-- Here's how you pass in the custom validator.
  ]),
  cpass:new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]),
 // validator:MustMatch('pass', 'cpass')
     // <-- Here's how you pass in the custom validator.
  
  

});

  }
  
  private validateAreEqual(fieldControl: FormControl) {
    return fieldControl.value === this.register.get('pass').value ? null : {
        NotEqual: true
    };
} 
  get name() {
    return this.register.get('name');
  }
  get cpass() {
    return this.register.get('cpass');
  }
  get pass() {
    return this.register.get('pass');
  }
  get uname() {
    return this.register.get('uname');
  }
  get email() {
    return this.register.get('email');
  }
  get contact() {
    return this.register.get('contact');
  }

  saveuser()
  {
    
    var value=this.register.value;
    console.log(value)
    this.user1.name=value.name;
    this.user1.username=value.uname;
    this.user1.password=value.pass;
    this.user1.email=value.email;
    this.user1.contact=value.contact;
    this.user.postUser(this.user1).subscribe( data => {
      if(data["check"]=="true")
      {
          //this.msg="you are registered succesfully";
          //Router.na
        
          this.router.navigate(["/login"])
      }
      else if(data["check"]=="exist")
      {
        this.msg="user already exist";
      }
    });
  }

  //  function phoneNumberValidator(
  //   control: AbstractControl
  // ): { [key: string]: any } | null {
  //   const valid = /^\d+$/.test(control.value)
  //   return valid
  //     ? null
  //     : { invalidNumber: { valid: false, value: control.value } }
  // }
}
