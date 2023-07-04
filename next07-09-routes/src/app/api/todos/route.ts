import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY as string;

export const GET = async (request: Request) => {
  const origin = request.headers.get("origin");

  const response = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await response.json();

  return NextResponse.json(todos, {
    status: 200,
    statusText: "OK",
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
};

export const POST = async (request: Request) => {
  let body: Partial<Todo>;

  try {
    body = await request?.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Missing required data" },
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  if (!body.title || !body.userId) {
    return NextResponse.json(
      { error: "Missing required data" },
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  const response = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({ ...body, completed: false }),
  });

  const newTodo: Todo = await response.json();

  return NextResponse.json(
    { newTodo },
    {
      status: 201,
      statusText: "Created",
    }
  );
};

export const PUT = async (request: Request) => {
  let body: Todo;

  try {
    body = await request?.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Missing required data" },
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  if (!body.title || !body.userId || !body.id || body.completed === undefined) {
    return NextResponse.json(
      { error: "Missing required data" },
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  const response = await fetch(`${DATA_SOURCE_URL}/${body.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify(body),
  });

  const updatedTodo: Todo = await response.json();

  return NextResponse.json(
    { updatedTodo },
    {
      status: 200,
      statusText: "Updated",
    }
  );
};

export const DELETE = async (request: Request) => {
  let body: Partial<Todo>;

  try {
    body = await request?.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Missing id" },
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  await fetch(`${DATA_SOURCE_URL}/${body.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });

  return NextResponse.json(
    { id: body.id },
    {
      status: 200,
      statusText: "Deleted",
    }
  );
};
