import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private router: Router, private auth: AuthService) {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/welcome');
    }
  }

}
