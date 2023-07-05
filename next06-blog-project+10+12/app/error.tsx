"use client";

import { useEffect } from "react";
import Link from "next/link";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
      <h2 className="my-4 text-2xl font-bold">Sorry, something went wrong.</h2>
      <button
        onClick={reset}
        className="mb-4 p-4 bg-red-500 text-white rounded-xl"
      >
        Try again
      </button>
      <p className="text-xl">
        Or go back to
        <Link className="underline" href="/">
          Home
        </Link>
      </p>
    </main>
  );
};

export default Error;
