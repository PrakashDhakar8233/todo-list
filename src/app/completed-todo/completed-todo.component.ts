import { Component, OnInit, NgZone } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.css']
})
export class CompletedTodoComponent implements OnInit {
  todoList: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
      this.todoList = this.todoService.getTodos();
      
  }

}
