import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from "angular-datatables";

import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {characterService} from './character.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    NgSelectModule,
    MatTableModule,
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [characterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
