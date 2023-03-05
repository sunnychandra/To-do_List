import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {DragDropModule } from '@angular/cdk/drag-drop'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
    ,DragDropModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
