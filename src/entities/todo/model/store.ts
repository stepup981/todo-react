import { create } from 'zustand';

import type { ITodo } from './types';

interface IStoreTodo {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

export const StoreTodo = create<IStoreTodo>(set => ({
  todos: [],
  setTodos: todos => set({ todos }),
}));
