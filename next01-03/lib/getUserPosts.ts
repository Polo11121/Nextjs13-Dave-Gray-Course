export const getUserPosts = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const user: Promise<Post[]> = response.json();

  if (!response.ok) {
    throw new Error("Error fetching user posts");
  }

  return user;
};
