import type { ITodo } from '~/entities/todo/model';

export interface IApiTodo {
  getTodosAsync(): Promise<ITodo[]>;
  getTodoAsync(id: number): Promise<ITodo>;
  createTodoAsync(todo: Omit<ITodo, 'id'>): Promise<ITodo>;
  updateTodoAsync(todo: Omit<ITodo, 'id'>, id: number): Promise<ITodo>;
  deleteTodoAsync(id: number): Promise<void>;
}
