import { create } from 'zustand';

import { apiTodo } from '~/entities/todo/api';

import type { Todo } from './types';

interface StoreTodo {
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

export const storeTodo = create<StoreTodo>(set => ({
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
      const todos = await apiTodo.fetchTodos();
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
