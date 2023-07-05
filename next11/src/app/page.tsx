import { TodoList } from "@/app/components";
import { AddTodo } from "@/app/components";

export const revalidate = 0;

const Home = () => (
  <>
    <AddTodo />
    {/* @ts-expect-error Server Component */}
    <TodoList />
  </>
);

export default Home;
