"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const changeSearchTermHandler = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm("");
    router.push(`/${searchTerm}/`);
  };

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={submitHandler}
    >
      <input
        className="bg-white p-2 w-80 text-xl rounded-xl"
        value={searchTerm}
        onChange={changeSearchTermHandler}
        placeholder="Search for a page..."
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
};
