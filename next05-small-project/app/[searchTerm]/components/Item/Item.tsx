import Image from "next/image";
import Link from "next/link";

export const Item = ({ result }: { result: Result }) => (
  <article className="m-4 max-w-lg">
    <div className="flex flex-row gap-4">
      {result?.thumbnail?.source && (
        <div className="flex flex-col justify-center">
          <Image
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-col justify-center">
        <h2>
          <Link
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
            className="text-xl font-bold underline"
          >
            {result.title}
          </Link>
        </h2>
        <p>{result.extract}</p>
      </div>
    </div>
  </article>
);
