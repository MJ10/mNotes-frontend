import {Component, ViewChild} from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('namefield') namefield;
  @ViewChild('emailfield') emailfield;
  @ViewChild('pass') passfield;

  name: String;
  username: String;
  email: String;
  password: String;
  cPass: String;

  constructor(private vs: ValidateService, public snackbar: MdSnackBar) { }

  onRegister() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    if (!this.vs.validateRegistrationData(user)) {
      this.snackbar.open('Please fill in all fields!', null, {duration: 1000});
      this.namefield.nativeElement.focus();
      return false;
    }

    if (!this.vs.validateEmail(user.email)) {
      this.snackbar.open('Please enter a valid email address', null, {duration: 1000});
      this.emailfield.nativeElement.focus();
      return false;
    }

    if (!(user.password.length >= 6)) {
      this.snackbar.open('Password must be at least 6 characters', null, {duration: 1000});
      this.cPass = '';
      this.password = '';
      this.passfield.nativeElement.focus();
      return false;
    }

    if (!this.vs.confirmPassword(this.cPass, user.password)){
      this.snackbar.open('The passwords do not match. Please re-enter the password', null, {duration: 1000});
      this.cPass = '';
      this.password = '';
      this.passfield.nativeElement.focus();
      return false;
    }
  }
}
