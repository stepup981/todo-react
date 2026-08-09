import { useEffect } from 'react';

import { todoStore } from '~/entities/todo/model';
import { Spinner } from '~/shared/ui/spinner';

import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, setTodos, loading, error } = todoStore();

  useEffect(() => {
    setTodos();
  }, [setTodos]);

  if (loading.fetch) {
    return <Spinner className="size-8" />;
  }

  if (error.fetch) {
    return <div>{error.fetch}</div>;
  }

  return (
    <div>
      {!todos.length ? (
        <p className="text-sm text-muted-foreground">Пока нет задач.</p>
      ) : (
        <ul className="grid gap-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
