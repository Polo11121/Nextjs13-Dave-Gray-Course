import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";
import Link from "next/link";

const icons = [
  {
    name: "youtube",
    url: "https://www.youtube.com/@DaveGrayTeachesCode",
    Icon: FaYoutube,
  },
  {
    name: "courses",
    url: "https://courses.davegray.codes/",
    Icon: FaLaptop,
  },
  {
    name: "github",
    url: "https://github.com/gitdagray/next-js-course",
    Icon: FaGithub,
  },
  {
    name: "twitter",
    url: "https://twitter.com/yesdavidgray",
    Icon: FaTwitter,
  },
];

export const Navbar = () => (
  <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
    <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/" className="text-white/90 no-underline hover:text-white">
          Michał Jasiński
        </Link>
      </h1>
      <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
        {icons.map(({ name, url, Icon }) => (
          <Link
            className="text-white/90 hover:text-white"
            key={name}
            href={url}
          >
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  </nav>
);
