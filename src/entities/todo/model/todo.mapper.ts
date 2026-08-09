import { DateTime } from 'luxon';

import type { TodoResponseDto } from '~/shared/api/generated/todoAPI.schemas';

import type { Todo } from './todo.types';

export const todoMapper = (todo: TodoResponseDto): Todo => {
  return {
    id: todo.id,
    name: todo.name,
    description: todo.description,
    createdAt: DateTime.fromISO(todo.createdAt),
    updatedAt: DateTime.fromISO(todo.updatedAt),
  };
};

export const todosMapper = (todos: TodoResponseDto[]): Todo[] => {
  return todos.map(todoMapper);
};
