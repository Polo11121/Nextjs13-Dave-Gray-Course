import { getFormattedDate, getPost, getPosts } from "@/lib";
import { notFound } from "next/navigation";
import Link from "next/link";

type Params = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params: { id } }: Params) => {
  const posts = getPosts();
  const post = posts.find((post) => post.id === id);

  return {
    title: post ? post.title : "Post not found",
    description: post ? `Post about ${post.title}` : "Post not found",
  };
};

export const generateStaticParams = async () => {
  const posts = getPosts();

  return posts.map(({ id }) => ({
    id,
  }));
};

const PostPage = async ({ params: { id } }: Params) => {
  const posts = getPosts();

  if (!posts.find((post) => post.id === id)) {
    notFound();
  }

  const { contentHtml, date, title } = await getPost(id);
  const formattedDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{formattedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
};

export default PostPage;
