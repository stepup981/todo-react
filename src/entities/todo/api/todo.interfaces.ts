import type { CreateTodo, Todo, UpdateTodo } from '~/entities/todo/model';

export interface TodoApiContract {
  fetchTodos(): Promise<Todo[]>;
  fetchTodo(id: number): Promise<Todo>;
  createTodo(todo: CreateTodo): Promise<Todo>;
  updateTodo(todo: UpdateTodo): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
}
