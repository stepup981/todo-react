import { useEffect, useState } from 'react';

import { apTodo } from '~/entities/todo/api';

import { storeTodo } from '.';

export const useGetTodos = () => {
  const { setTodos } = storeTodo();
  const [isLoading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await apTodo.getTodosAsync();
      setTodos(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { isLoading, fetchTodos };
};
