import { Post } from "@/app/components";
import { getPosts } from "@/lib";

export const Posts = async () => {
  const posts = await getPosts();

  return posts ? (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </ul>
    </section>
  ) : (
    <p className="mt-10 text-center ">Sorry, no posts available.</p>
  );
};
