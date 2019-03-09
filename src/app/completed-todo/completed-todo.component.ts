import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.css']
})
export class CompletedTodoComponent implements OnInit {
todoList: any[]
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodos()
    var todoFilteredlist = [];
    console.log(this.todoList)
    this.todoList.forEach(e=>{
      console.log("12313"+e)
      if(e.done){
        todoFilteredlist.push(e);
      }
    })
    console.log(todoFilteredlist)
    this.todoList =todoFilteredlist
  }

}
