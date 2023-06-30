export const getUserPosts = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const user: Promise<Post[]> = response.json();

  if (!response.ok) {
   return undefined;
  }

  return user;
};
