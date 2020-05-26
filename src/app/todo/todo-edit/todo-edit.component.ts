import { Component, Input } from '@angular/core';

export interface Todo {
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})


export class TodoEditComponent {
  @Input() todos: Todo[];
  

  title: string;
  description: string;

  task = {
    title: '',
    description: ''
  };

  onEdit(item): void {
    this.task = item;
  }
}

