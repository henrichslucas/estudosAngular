import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { BasicCreationComponent } from './basic-creation/basic-creation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OperatorsComponent } from './operators/operators.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicCreationComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
