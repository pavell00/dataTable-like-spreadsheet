import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTableModule,SharedModule, 
         AutoCompleteModule,ButtonModule,
         DataListModule, DialogModule,
         InputTextModule, DropdownModule,
         RadioButtonModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import {AppService} from './app.service';
import { SelectDialogComponent } from './select-dialog/select-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DataTableModule, SharedModule, AutoCompleteModule,
    ButtonModule, DataListModule, DialogModule,
    InputTextModule, DropdownModule, RadioButtonModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
