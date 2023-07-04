import { NextResponse } from "next/server";
import { limiter } from "@/api/config";

export const GET = async (request: Request) => {
  const origin = request.headers.get("origin");

  const remaining = await limiter.removeTokens(1);

  if (remaining < 0) {
    return NextResponse.json(null, {
      status: 429,
      statusText: "Too Many Requests",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
      },
    });
  }

  return NextResponse.json(
    { text: "Hello World!" },
    {
      status: 200,
      statusText: "OK",
    }
  );
};
