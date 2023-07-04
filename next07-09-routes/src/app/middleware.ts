import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://example.com"]
    : ["http://localhost:3000"];

export const middleware = async (request: Request) => {
  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  if (request.url.includes("/api/")) {
  }
  return NextResponse.next();
};

export const config = {
  matcher: "/api/:path*",
};
