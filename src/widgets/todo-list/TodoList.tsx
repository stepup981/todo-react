import { useEffect } from 'react';

import { storeTodo } from '~/entities/todo/model';

const TodoList = () => {
  const { todos, setTodos, loading, error } = storeTodo();

  useEffect(() => {
    setTodos();
  }, []);

  if (loading.fetch) return <div>Пошла возня</div>;
  if (error.fetch) return <div style={{ color: 'red' }}>{error.fetch}</div>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;
