import { Component, OnInit, NgZone } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.css']
})
export class CompletedTodoComponent implements OnInit {
  todoList: any[];
  constructor(private todoService: TodoService, private ngZone: NgZone) { }

  ngOnInit() {
      this.todoList = this.todoService.getTodos();
      // console.log(this.todoList);
      // var todoFilteredlist = this.todoList.filter(obj => obj.done);
      // console.log(todoFilteredlist)
      // this.todoList =todoFilteredlist;
  }

}
