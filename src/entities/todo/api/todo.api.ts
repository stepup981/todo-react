import type { IApiTodo } from '~/entities/todo/api/todo.interfaces';
import { type Todo } from '~/entities/todo/model/types';

import { ApiBase } from '~/shared/config';
import { TODO_ENPOINTS } from '~/shared/config/endpoints';


export class ApiTodo extends ApiBase implements IApiTodo {
  public fetchTodos(): Promise<Todo[]> {
    return this.get<Todo[]>(TODO_ENPOINTS.GET_ALL);
  }

  public fetchTodo(id: number): Promise<Todo> {
    return this.get<Todo>(`${TODO_ENPOINTS.GET_ALL}/${id}`);
  }

  public createTodo(todo: Omit<Todo, 'id'>): Promise<Todo> {
    return this.post<Todo>(TODO_ENPOINTS.GET_ALL, todo);
  }

  public updateTodo(todo: Omit<Todo, 'id'>, id: number): Promise<Todo> {
    return this.patch<Todo>(`${TODO_ENPOINTS.GET_ALL}/${id}`, todo);
  }

  public deleteTodo(id: number): Promise<void> {
    return this.delete<void>(`${TODO_ENPOINTS.GET_ALL}/${id}`);
  }
}
