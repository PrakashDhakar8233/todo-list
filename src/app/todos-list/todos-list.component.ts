import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
todoList: any;
id: number;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
   
    this.todoList = this.todoService.getTodos()
    console.log(this.todoList)
  }
  onDelete(id){
    this.todoService.deleteTodo(id)
  }
   onComplete(id){
    this.todoList[id] = this.todoService.updateDone(id)
    console.log(this.todoList)
  }
  onEdit(id){
    
  }
}
