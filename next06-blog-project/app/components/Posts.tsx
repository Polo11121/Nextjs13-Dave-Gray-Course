import { Post } from "@/app/components";
import { getPosts } from "@/lib";

export const Posts = () => {
  const posts = getPosts();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </ul>
    </section>
  );
};
