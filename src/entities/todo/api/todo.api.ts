import type { ApiTodo } from '~/entities/todo/api/todo.interfaces';
import { type Todo } from '~/entities/todo/model';

import { ApiBase, TODO_ENPOINTS } from '~/shared/config';

class ApTodo extends ApiBase implements ApiTodo {
  public getTodosAsync(): Promise<Todo[]> {
    return this.get<Todo[]>(TODO_ENPOINTS.GET_ALL);
  }

  public getTodoAsync(id: number): Promise<Todo> {
    return this.get<Todo>(`${TODO_ENPOINTS.GET_ALL}/${id}`);
  }

  public createTodoAsync(todo: Omit<Todo, 'id'>): Promise<Todo> {
    return this.post<Todo>(TODO_ENPOINTS.GET_ALL, todo);
  }

  public updateTodoAsync(todo: Omit<Todo, 'id'>, id: number): Promise<Todo> {
    return this.patch<Todo>(`${TODO_ENPOINTS.GET_ALL}/${id}`, todo);
  }

  public deleteTodoAsync(id: number): Promise<void> {
    return this.delete<void>(`${TODO_ENPOINTS.GET_ALL}/${id}`);
  }
}

export const apTodo = new ApTodo();
