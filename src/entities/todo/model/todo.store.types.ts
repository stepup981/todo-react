import type { CreateTodoDto } from '~/shared/api/generated/todoAPI.schemas';
import type { Todo } from './todo.types';

export interface TodoStore {
  todos: Todo[];
  loading: {
    fetch: boolean;
    create: boolean;
    update: boolean;
    remove: boolean;
  };

  error: {
    fetch: string | null;
    create: string | null;
    update: string | null;
    remove: string | null;
  };

  setTodos: () => Promise<Todo[]>;
  createTodo: (todo: CreateTodoDto) => Promise<Todo | null>;
}
