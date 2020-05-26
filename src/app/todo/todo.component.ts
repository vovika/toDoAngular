import { Component } from '@angular/core';
import { Todo } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  todos: Todo[] = [
    
  ];

  handleTodoSubmited({ title, description }: Todo): void {
    const isTodoAlreadyExists = this.todos.some((todo: Todo) => {
      return (title === todo.title) && (description === todo.description);
    });

    if (!isTodoAlreadyExists) {
      this.todos.push({ title, description });
    }
  }
}
