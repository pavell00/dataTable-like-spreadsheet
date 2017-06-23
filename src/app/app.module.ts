import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataTableModule,SharedModule, 
         AutoCompleteModule,ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule, SharedModule, AutoCompleteModule,
    ButtonModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
