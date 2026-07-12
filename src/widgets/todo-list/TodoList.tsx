import { useEffect } from 'react';

import { todoStore } from '~/entities/todo/model';

const TodoList = () => {
  const { todos, setTodos, loading, error } = todoStore();

  useEffect(() => {
    setTodos();
  }, [setTodos]);

  if (loading.fetch) {
    return <div>Loading...</div>;
  }

  if (error.fetch) {
    return <div>{error.fetch}</div>;
  }

  return (
    <div>
      <h3>Список задач</h3>

      {!todos.length ? (
        <div>Пока нет задач.</div>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
