import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FavoriteColorComponent } from './form.component';
import { ButtonOverviewExample } from './button.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,FavoriteColorComponent, ButtonOverviewExample ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
