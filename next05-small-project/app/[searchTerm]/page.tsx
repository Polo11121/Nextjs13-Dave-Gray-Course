import { Item } from "@/searchResult/components";
import { getWikiResults } from "@/hooks";

type Props = {
  params: {
    searchTerm: string;
  };
};

export const generateMetadata = async ({ params: { searchTerm } }: Props) => {
  const wikiData = await getWikiResults(searchTerm);
  const results = wikiData?.query?.pages;

  const displayTerm = searchTerm.replace("%20", " ");

  return {
    title: results
      ? `${displayTerm} | WikiRocket!`
      : `${displayTerm} Not Found | WikiRocket!`,
    description: `Search results for ${displayTerm} on WikiRocket!`,
  };
};

const SearchResult = async ({ params: { searchTerm } }: Props) => {
  const wikiData = await getWikiResults(searchTerm);

  const results = wikiData?.query?.pages;

  return (
    <div>
      <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
        {results ? (
          Object.values(results).map((result) => (
            <Item result={result} key={result.pageid} />
          ))
        ) : (
          <h2 className="p-2 text-xl">{searchTerm} Not Found</h2>
        )}
      </main>
    </div>
  );
};

export default SearchResult;
