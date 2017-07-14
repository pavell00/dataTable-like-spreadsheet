import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Logger } from "angular2-logger/core";

import { DataTableModule,SharedModule, 
         AutoCompleteModule,ButtonModule,
         DataListModule, DialogModule,
         InputTextModule, DropdownModule,
         RadioButtonModule, CheckboxModule} from 'primeng/primeng';

import { MainFormComponent } from './components/main-form/main-form.component';
import { SearchEntityComponent } from './components/search-entity-dlg/search-entity-dlg.component';
import { TableEntityComponent } from './components/table-entity/table-entity.component';
import { AppService } from './services/app.service';
import { AutoFocusDirective } from './auto-focus.directive';
import { AgentSelectorComponent } from './components/agent-selector/agent-selector.component';
import { DocNoDateComponent } from './components/doc-no-date/doc-no-date.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { BinderSelectorComponent } from './components/binder-selector/binder-selector.component';

@NgModule({
  declarations: [
    MainFormComponent,
    SearchEntityComponent,
    AutoFocusDirective,
    MainFormComponent,
    TableEntityComponent,
    AgentSelectorComponent,
    DocNoDateComponent,
    PriceListComponent,
    BinderSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DataTableModule, SharedModule, AutoCompleteModule,
    ButtonModule, DataListModule, DialogModule,
    InputTextModule, DropdownModule, RadioButtonModule,
    CheckboxModule
  ],
  providers: [AppService, Logger],
  bootstrap: [MainFormComponent]
})
export class AppModule { }
