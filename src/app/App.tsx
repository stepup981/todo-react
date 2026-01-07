import Home from '@/pages/home/Home';
import Todo from '@/pages/todo/Todo';
import { ROUTE_PATH } from '@/shared/config';
import Header from '@/widgets/header/Header';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTE_PATH.HOME} element={<Home />} />
        <Route path={ROUTE_PATH.TODO} element={<Todo />} />
      </Routes>
    </>
  );
}
