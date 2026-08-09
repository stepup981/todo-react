import type { DateTime } from 'luxon';

import type { TodoResponseDto } from '~/shared/api/generated/todoAPI.schemas';

export type Todo = Omit<TodoResponseDto, 'createdAt' | 'updatedAt'> & {
  createdAt: DateTime;
  updatedAt: DateTime;
};
