export const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const user: Promise<User[]> = response.json();

  if (!response.ok) {
    throw new Error("Error fetching users");
  }

  return user;
};
