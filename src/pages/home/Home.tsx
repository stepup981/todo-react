import TodoList from '~/widgets/todo-list';
import { CreateTodoForm } from '~/features/action-todo/ui/CreateTodoForm';

const Home = () => {
  return (
    <>
      <CreateTodoForm />
      <TodoList />
    </>
  );
};

export default Home;
