import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = (request: Request) => {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get("secret");
  const path = searchParams.get("path") || "/";

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json(
      {
        error: "Invalid token",
      },
      {
        status: 401,
        statusText: "Unauthorized",
      }
    );
  }

  revalidatePath(path);

  return NextResponse.json(
    { revalidated: true, now: Date.now() },
    {
      status: 200,
      statusText: "OK",
    }
  );
};
