import { NextResponse } from "next/server";

export const GET = (request: Request) => {
  const { searchParams } = new URL(request.url);

  const instrument = searchParams.get("instrument");
  const name = searchParams.get("name");

  const obj = Object.fromEntries(searchParams.entries());

  return NextResponse.json(obj, {
    status: 200,
    statusText: "OK",
  });
};
