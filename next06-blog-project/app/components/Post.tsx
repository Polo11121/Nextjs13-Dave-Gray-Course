import { getFormattedDate } from "@/lib";
import Link from "next/link";

type Props = {
  post: Post;
};

export const Post = ({ post }: Props) => {
  const { title, id, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
};
