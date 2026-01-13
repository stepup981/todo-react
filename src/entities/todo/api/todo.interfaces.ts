import type { Todo } from '~/entities/todo/model';

export interface ApiTodo {
  getTodosAsync(): Promise<Todo[]>;
  getTodoAsync(id: number): Promise<Todo>;
  createTodoAsync(todo: Omit<Todo, 'id'>): Promise<Todo>;
  updateTodoAsync(todo: Omit<Todo, 'id'>, id: number): Promise<Todo>;
  deleteTodoAsync(id: number): Promise<void>;
}
