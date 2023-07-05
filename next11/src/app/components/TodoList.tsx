import { Todo } from "@/app/components";
import { fetchTodos } from "@/lib";

export const TodoList = async () => {
  const todos = await fetchTodos();

  const sortedTodos = todos.reverse();

  return (
    <>
      {sortedTodos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};
