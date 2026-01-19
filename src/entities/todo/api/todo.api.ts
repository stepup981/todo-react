import type { TodoApiContract } from '~/entities/todo/api/todo.interfaces';
import { type CreateTodo, type Todo, type UpdateTodo } from '~/entities/todo/model';

import { ApiBase, TODO_ENPOINTS } from '~/shared/config';

class TodoApi extends ApiBase implements TodoApiContract {
  public fetchTodos(): Promise<Todo[]> {
    return this.get(TODO_ENPOINTS.GET_ALL);
  }

  public fetchTodo(id: number): Promise<Todo> {
    return this.get(`${TODO_ENPOINTS.GET_ALL}/${id}`);
  }

  public createTodo(todo: CreateTodo): Promise<Todo> {
    return this.post(TODO_ENPOINTS.GET_ALL, todo);
  }

  public updateTodo(todo: UpdateTodo): Promise<Todo> {
    return this.patch(`${TODO_ENPOINTS.GET_ALL}/${todo.id}`, todo);
  }

  public deleteTodo(id: number): Promise<void> {
    return this.delete(`${TODO_ENPOINTS.GET_ALL}/${id}`);
  }
}

export const todoApi = new TodoApi();
