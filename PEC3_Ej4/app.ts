import { TodoService } from './services/todo.service';
import { TodoController } from './controllers/todo.controller';
import { TodoView } from './views/todo.views';

const app = new TodoController(new TodoService(), new TodoView());
