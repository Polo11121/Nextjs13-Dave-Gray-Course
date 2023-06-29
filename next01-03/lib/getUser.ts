export const getUser = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user: Promise<User> = response.json();

  if (!response.ok) {
    throw new Error("Error fetching user");
  }

  return user;
};
