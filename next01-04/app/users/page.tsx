import type { Metadata } from "next";
import { getAllUsers } from "@/lib";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users Page",
  description: "Page that lists all users",
};

const UsersPage = async () => {
  const users = await getAllUsers();

  return (
    <div className="flex flex-col">
      {users.map(({ id, name }) => (
        <Link key={id} href={`/users/${id}`}>
          {id} - {name}
        </Link>
      ))}
      <Link className="text-center" href="/">
        Go to Home
      </Link>
    </div>
  );
};

export default UsersPage;
