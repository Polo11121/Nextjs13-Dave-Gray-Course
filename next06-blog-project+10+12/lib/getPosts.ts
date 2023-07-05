import { getPost } from "@/lib";

type FileTree = {
  tree: [
    {
      path: string;
    }
  ];
};

export const getPosts = async (): Promise<Meta[] | undefined> => {
  const response = await fetch(
    "https://api.github.com/repos/Polo11121/BlogPosts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    return undefined;
  }

  const repoFileTree: FileTree = await response.json();

  const filesArray = repoFileTree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPost(file);

    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((firstPost, secondPost) =>
    firstPost.date < secondPost.date ? 1 : -1
  );
};
