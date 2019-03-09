import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { CompletedTodoComponent } from './completed-todo/completed-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosListComponent,
    CompletedTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
