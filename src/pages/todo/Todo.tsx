import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const Todo = () => {
  return (
    <Card>
      <div>что-то ради теста ci/cd</div>
      <Title level={3} style={{ marginBottom: 16 }}>
        Отдельный TODO
      </Title>
      <Text type="secondary">Здесь позже можно сделать детальную страницу задачи.</Text>
    </Card>
  );
};

export default Todo;
