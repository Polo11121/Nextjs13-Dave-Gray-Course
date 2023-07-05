import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import { CustomImage, Video } from "@/app/components";
import { compileMDX } from "next-mdx-remote/rsc";

export const getPost = async (
  fileName: string
): Promise<BlogPost | undefined> => {
  const response = await fetch(
    `https://raw.githubusercontent.com/Polo11121/BlogPosts/main/${fileName}${
      fileName.includes("mdx") ? "" : ".mdx"
    }`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );
  console.log(
    `https://raw.githubusercontent.com/Polo11121/BlogPosts/main/${fileName}`
  );
  if (!response.ok) {
    return undefined;
  }

  const rawMDX = await response.text();

  if (rawMDX === "404: Not Found") {
    return undefined;
  }

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    tags: string[];
  }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          rehypeHighlight,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };

  return blogPostObj;
};
