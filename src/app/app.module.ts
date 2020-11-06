import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppFormComponent } from './app-form/app-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
