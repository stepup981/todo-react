import { create } from 'zustand';

import { getTodos, createTodo } from '~/shared/api/generated/todos';

import type { TodoStore } from './todo.store.types';
import { todoMapper, todosMapper } from './todo.mapper';
import type { CreateTodoDto } from '~/shared/api/generated/todoAPI.schemas';

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
      const mappedTodos = todosMapper(todos);
      set({ todos: mappedTodos });
      return mappedTodos;
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
  async createTodo(todo: CreateTodoDto) {
    set((state) => ({
      loading: { ...state.loading, create: true },
      error: { ...state.error, create: null },
    }));

    try {
      const newTodo = await createTodo(todo);
      const mappedTodo = todoMapper(newTodo);
      set((state) => ({ todos: [...state.todos, mappedTodo] }));
      return mappedTodo;
    } catch (error) {
      set((state) => ({
        error: {
          ...state.error,
          create: error instanceof Error ? error.message : 'Ошибка создания',
        },
      }));
      return null;
    } finally {
      set((state) => ({ loading: { ...state.loading, create: false } }));
    }
  },
}));
