import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {
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
    return this.todosList
  }
  ngOnInit(){
    
  
 
  }
  updateDone(id: number){
    
    this.todosList[id].done = true
    console.log(this.todosList[id].done)
    return this.todosList[id]
    
   
  }
  deleteTodo(id: number){
    this.todosList.splice(id,1);

  }
}
