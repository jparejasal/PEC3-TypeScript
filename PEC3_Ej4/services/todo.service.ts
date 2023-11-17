import { Todo } from '../models/todo.model';


type TodoListChangedCallback = (todos: Todo[]) => void;

class TodoService {
  public todos: Todo[];
  private onTodoListChanged?: TodoListChangedCallback;

  constructor() {
    const todosJSON = localStorage.getItem('todos');
    this.todos = (todosJSON ? JSON.parse(todosJSON) : []).map(
      (todo: { text: string; complete: boolean; id?: string }) => new Todo(todo)
    );
  }

  public bindTodoListChanged(callback: TodoListChangedCallback): void {
    this.onTodoListChanged = callback;
  }

  private _commit(todos: Todo[]): void {
    this.onTodoListChanged?.(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  public addTodo(text: string): void {
    this.todos.push(new Todo({ text }));
    this._commit(this.todos);
  }

  public editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, text: updatedText }) : todo
    );
    this._commit(this.todos);
  }

  public deleteTodo(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this._commit(this.todos);
  }

  public toggleTodo(id: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );
    this._commit(this.todos);
  }
}

export { TodoService };

