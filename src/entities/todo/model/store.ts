import { create } from 'zustand';

import type { Todo } from './types';

interface IStoreTodo {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export const storeTodo = create<IStoreTodo>(set => ({
  todos: [],
  setTodos: todos => set({ todos }),
}));
