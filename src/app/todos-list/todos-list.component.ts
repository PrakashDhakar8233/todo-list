import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
@Input()todoList: Todo[];
id: number;


  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodos()
  }
  onDelete(id){
    this.todoService.deleteTodo(id)
  }
   onComplete(id){
    this.todoService.updateDone(id);
   
  }
  onEdit(id){
    this.todoService.editTodo(id)
  }
  
}
