import type { Todo } from '~/entities/todo/model/types';

export interface IApiTodo {
  fetchTodos(): Promise<Todo[]>;
  fetchTodo(id: number): Promise<Todo>;
  createTodo(todo: Omit<Todo, 'id'>): Promise<Todo>;
  updateTodo(todo: Omit<Todo, 'id'>, id: number): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
}
