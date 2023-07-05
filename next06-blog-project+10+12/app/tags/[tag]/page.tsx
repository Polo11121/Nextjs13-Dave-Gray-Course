import { Post } from "@/app/components";
import { getPosts } from "@/lib";
import Link from "next/link";

export const revalidate = 86400;

type Params = {
  params: {
    tag: string;
  };
};

export const generateStaticParams = async () => {
  const posts = await getPosts();

  if (!posts) {
    return [];
  }

  const tags = new Set(posts.map(({ tags }) => tags).flat());

  return Array.from(tags).map((tag) => ({
    tag,
  }));
};

export const generateMetadata = async ({ params: { tag } }: Params) => ({
  title: tag ? `Posts tagged with ${tag}` : "No posts found",
  description: tag ? `Posts tagged with ${tag}` : "No posts found",
});

const TagPage = async ({ params: { tag } }: Params) => {
  const posts = await getPosts();

  if (!posts) {
    return <p className="mt-10 text-center ">Sorry, no posts available.</p>;
  }

  const filteredPosts = posts.filter((post) => post.tags.includes(tag));

  return filteredPosts.length ? (
    <>
      <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  ) : (
    <div className="text-center">
      <p className="mt-10">Sorry no posts for that keyword.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default TagPage;
