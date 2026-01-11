import type { IApiTodo } from '~/entities/todo/api/todo.interfaces';
import { type ITodo } from '~/entities/todo/model';

import { ApiBase, TODO_ENPOINTS } from '~/shared/config';

class ApiTodo extends ApiBase implements IApiTodo {
  public getTodosAsync(): Promise<ITodo[]> {
    return this.get<ITodo[]>(TODO_ENPOINTS.GET_ALL);
  }

  public getTodoAsync(id: number): Promise<ITodo> {
    return this.get<ITodo>(`${TODO_ENPOINTS.GET_ALL}/${id}`);
  }

  public createTodoAsync(todo: Omit<ITodo, 'id'>): Promise<ITodo> {
    return this.post<ITodo>(TODO_ENPOINTS.GET_ALL, todo);
  }

  public updateTodoAsync(todo: Omit<ITodo, 'id'>, id: number): Promise<ITodo> {
    return this.patch<ITodo>(`${TODO_ENPOINTS.GET_ALL}/${id}`, todo);
  }

  public deleteTodoAsync(id: number): Promise<void> {
    return this.delete<void>(`${TODO_ENPOINTS.GET_ALL}/${id}`);
  }
}

export const apiTodo = new ApiTodo();
