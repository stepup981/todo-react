export type Todo = {
  id: number;
  name: string;
  description: string;
};

export type CreateTodo = Omit<Todo, 'id'> & Partial<Pick<Todo, 'description'>>;
export type UpdateTodo = Pick<Todo, 'id'> & Partial<Omit<Todo, 'id'>>;
