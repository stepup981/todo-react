import { create } from 'zustand';

import { getTodos } from '~/shared/api/generated/todos';

import type { TodoStore } from './todo.store.types';

export const todoStore = create<TodoStore>((set) => ({
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
    set((state) => ({
      loading: { ...state.loading, fetch: true },
      error: { ...state.error, fetch: null },
    }));

    try {
      const todos = await getTodos();
      set({ todos });
      return todos;
    } catch (error) {
      set((state) => ({
        error: {
          ...state.error,
          fetch: error instanceof Error ? error.message : 'Ошибка загрузки',
        },
      }));
      return [];
    } finally {
      set((state) => ({ loading: { ...state.loading, fetch: false } }));
    }
  },
}));
