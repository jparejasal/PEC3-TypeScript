/**
 * @class Service
 *
 * Manages the data of the application.
 */


class Todo {
  id: string;
  text: string;
  complete: boolean;

  constructor({ id, text, complete }) {
    this.id = id;
    this.text = text;
    this.complete = complete;
  }
}

class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(
      todo => new Todo(todo)
    );
  }

  bindTodoListChanged(callback: (todos: Todo[]) => void) {
    this.onTodoListChanged = callback;
  }

  onTodoListChanged(todos: Todo[]) {
    // implementation
  }

  _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: string) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id: string) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
