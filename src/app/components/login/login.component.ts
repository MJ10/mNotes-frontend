import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('usernamefield') usernamefield;
  @ViewChild('pass') passfield;

  username: String;
  password: String;

  constructor(private router: Router, private auth: AuthService, public snackbar: MdSnackBar) { }

  onLogin() {
    const user = {
      username: this.username,
      password: this.password
    };

    if(!this.username){
      this.snackbar.open('Please enter username!', null, {duration: 1000});
      this.usernamefield.nativeElement.focus();
      return false;
    }

    if(!this.password){
      this.snackbar.open('Please enter a password!', null, {duration: 1000});
      this.passfield.nativeElement.focus();
      return false;
  }

    this.auth.authenticate(user).subscribe(resp => {
      if (resp.success) {
        this.snackbar.open('Successfully logged in!', null, { duration: 1000 });
        this.auth.storeAuthData(resp);
        this.router.navigateByUrl('/');
      } else {
        this.password = '';
        this.snackbar.open(resp.msg, null, { duration: 2000 });
        this.passfield.nativeElement.focus();
      }
    });
  }
}
