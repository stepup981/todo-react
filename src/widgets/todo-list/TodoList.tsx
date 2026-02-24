import { useEffect } from 'react';

import { Alert, Card, List, Spin, Typography } from 'antd';

import { todoStore, type Todo } from '~/entities/todo/model';

const { Title, Text } = Typography;
const { Item } = List;

const TodoList = () => {
  const { todos, setTodos, loading, error } = todoStore();

  useEffect(() => {
    setTodos();
  }, [setTodos]);

  if (loading.fetch) {
    return <Spin size="large" style={{ display: 'flex', justifyContent: 'center' }} />;
  }

  if (error.fetch) {
    return <Alert type="error" message={error.fetch} />;
  }

  return (
    <Card>
      <Title level={3} style={{ marginBottom: 16 }}>
        Список задач
      </Title>

      {!todos.length ? (
        <Text type="secondary">Пока нет задач.</Text>
      ) : (
        <List<Todo>
          dataSource={todos}
          renderItem={(todo: Todo) => (
            <Item>
              <Item.Meta title={todo.name} description={todo.description} />
            </Item>
          )}
        />
      )}
    </Card>
  );
};

export default TodoList;
