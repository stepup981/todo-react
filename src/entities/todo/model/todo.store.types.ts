import type { TodoResponseDto } from '~/shared/api/generated/todoAPI.schemas';

export interface TodoStore {
  todos: TodoResponseDto[];
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

  setTodos: () => Promise<TodoResponseDto[]>;
}
