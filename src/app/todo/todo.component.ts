import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }
id: number;

  ngOnInit() {
  }
  onAddTodo(itemTitle){
     this.todoService.addTodos(itemTitle.value, false);
    //  itemTitle.value= null;
    //  console.log(itemTitle.value)
  }
 
 

}
