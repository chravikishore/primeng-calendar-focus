import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng';

import {FocusTrapModule} from 'primeng/focustrap';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    FocusTrapModule
  ],
  declarations: [
    AppComponent,
    HelloComponent
  ],
  bootstrap: [
    AppComponent 
  ]
})
export class AppModule { }
