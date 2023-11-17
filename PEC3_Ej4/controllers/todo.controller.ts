import { TodoService } from '../services/todo.service';
import { TodoView } from '../views/todo.views';
import { Todo } from '../models/todo.model';

class TodoController {
  private service: TodoService;
  private view: TodoView;

  constructor(service: TodoService, view: TodoView) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }

  private onTodoListChanged = (todos: Todo[]): void => {
    this.view.displayTodos(todos);
  };

  private handleAddTodo = (todoText: string): void => {
    this.service.addTodo(todoText);
  };

  private handleEditTodo = (id: string, todoText: string): void => {
    this.service.editTodo(id, todoText);
  };

  private handleDeleteTodo = (id: string): void => {
    this.service.deleteTodo(id);
  };

  private handleToggleTodo = (id: string): void => {
    this.service.toggleTodo(id);
  };
}

export { TodoController };
