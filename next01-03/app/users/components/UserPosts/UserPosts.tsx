export const UserPosts = async ({
  promisePosts,
}: {
  promisePosts: Promise<Post[]>;
}) => {
  const posts = await promisePosts;

  return (
    <ul>
      {posts?.map(({ id, title, body }, index) => (
        <li key={id}>
          <h3>
            {index}. {title}
          </h3>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};
