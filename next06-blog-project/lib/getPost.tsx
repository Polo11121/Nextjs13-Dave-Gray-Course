import fs from "fs";
import path from "path";
import html from "remark-html";
import matter from "gray-matter";
import { remark } from "remark";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPost = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: Post & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return blogPostWithHTML;
};
