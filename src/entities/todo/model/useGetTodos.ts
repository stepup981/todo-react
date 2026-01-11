import { useEffect, useState } from 'react';

import { apiTodo } from '~/entities/todo/api';

import { StoreTodo } from '.';

export const useGetTodos = () => {
  const { setTodos } = StoreTodo();
  const [isLoading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await apiTodo.getTodosAsync();
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
