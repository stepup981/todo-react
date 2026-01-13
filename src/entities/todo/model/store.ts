import { create } from 'zustand';

import type { Todo } from './types';

interface StoreTodo {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export const storeTodo = create<StoreTodo>(set => ({
  todos: [],
  setTodos: todos => set({ todos }),
}));
