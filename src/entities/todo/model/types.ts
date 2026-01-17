export type Todo = {
  id: number;
  name: string;
  description: string;
};

export type CreateTodo = Omit<Todo, 'id'>;
export type UpdateTodo = CreateTodo & {
  id: number;
};
