import { create } from 'zustand';

import { todoApi } from '~/entities/todo/api';
import type { Todo } from '~/entities/todo/model';

interface TodoStore {
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
}

export const todoStore = create<TodoStore>(set => ({
  todos: [],
  loading: {
    fetch: false,
    create: false,
    update: false,
    remove: false,
  },
  error: {
    fetch: null,
    create: null,
    update: null,
    remove: null,
  },
  async setTodos() {
    set(state => ({
      loading: { ...state.loading, fetch: true },
      error: { ...state.error, fetch: null },
    }));

    try {
      const todos = await todoApi.fetchTodos();
      set({ todos });
      return todos;
    } catch (error) {
      set(state => ({
        error: { ...state.error, fetch: error instanceof Error ? error.message : 'Ошибка загрузки' },
      }));
      return [];
    } finally {
      set(state => ({ loading: { ...state.loading, fetch: false } }));
    }
  },
}));
