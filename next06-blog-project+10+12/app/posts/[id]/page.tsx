import { getFormattedDate, getPost, getPosts } from "@/lib";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";

export const revalidate = 10;

type Params = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params: { id } }: Params) => {
  const post = await getPost(id);

  return {
    title: post ? post.meta.title : "Post not found",
    description: post ? `Post about ${post.meta.title}` : "Post not found",
  };
};

export const generateStaticParams = async () => {
  const posts = await getPosts();

  return posts
    ? posts.map(({ id }) => ({
        id,
      }))
    : [];
};

const PostPage = async ({ params: { id } }: Params) => {
  const post = await getPost(id);
  console.log(post);
  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  const formattedDate = getFormattedDate(meta.date);

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{formattedDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">
          {meta.tags.map((tag, index) => (
            <Link key={index} href={`/tags/${tag}`}>
              {tag}
            </Link>
          ))}
        </div>
      </section>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </>
  );
};

export default PostPage;
