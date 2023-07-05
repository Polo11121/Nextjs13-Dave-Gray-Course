import { notFound } from "next/navigation";
import { Todo } from "@/app/components";
import { fetchTodo } from "@/lib";

export const revalidate = 0;

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params: { id } }: Props) {
  const todo = await fetchTodo(id);

  if (!todo) {
    notFound();
  }

  return <Todo {...todo} />;
}
