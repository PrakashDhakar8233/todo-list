import { Injectable } from '@angular/core';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosList: Todo[] = [
    {title: "buy milk", done: false},
    {title: "buy veg", done: false},
    {title: "buy egg", done: false}
  ]
  
  constructor() { }
  
  addTodos(title: string, done: boolean){
    this.todosList.push({title, done})
    // console.log(this.todosList)
  
  }

  getTodos(){
    return this.todosList;
  }

  updateDone(id: number) {
    this.todosList[id].done = true;
    return this.todosList 
  }
  
  deleteTodo(id: number){
    this.todosList.splice(id,1);

  }
  editTodo(id: number){
    let title = this.todosList[id].title;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== ""){
      this.todosList[id].title = result;
    }
   
    console.log( )
  }
}
