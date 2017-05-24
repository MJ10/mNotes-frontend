import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MdToolbarModule, MdIconModule, MdMenuModule, MdButtonModule, MdDialogModule } from '@angular/material';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdDialogModule,
    AppRoutingModule
  ],
  entryComponents: [AboutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
