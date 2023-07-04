import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

type Params = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, { params: { id } }: Params) => {
  const response = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo: Todo = await response.json();

  if (!todo || todo.id !== Number(id)) {
    return NextResponse.json(
      { error: "Todo not found" },
      {
        status: 404,
        statusText: "Not Found",
      }
    );
  }

  return NextResponse.json(todo, {
    status: 200,
    statusText: "OK",
  });
};
