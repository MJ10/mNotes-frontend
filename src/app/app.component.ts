import { Component } from '@angular/core';
import {MdDialog} from '@angular/material';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  loggedIn = false;

  constructor(public dialog: MdDialog){}

  viewAboutDialog() {
    this.dialog.open(AboutComponent);
  }
}
