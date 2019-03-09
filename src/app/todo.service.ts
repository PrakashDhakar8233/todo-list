import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosList: any = [
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
    return this.todosList[id];
  }
  
  deleteTodo(id: number){
    this.todosList.splice(id,1);
  }
}
