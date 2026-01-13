import { storeTodo, useGetTodos } from '~/entities/todo/model';

const TodoList = () => {
  const { todos } = storeTodo();
  const { isLoading } = useGetTodos();

  if (isLoading) return <div>Пошла возня</div>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;
