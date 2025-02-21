import IndividualQuote from "@/app/components/IndividualQuote";
import GetAllQuotes from "@/app/GetData/GetAllQuotes.js";
import { sql } from "@vercel/postgres";

export default async function SortIdPage({ params }) {
  console.log("id page params are", params);

  let results;
  let thisFilteredList;

  if (params.type === "seasons") {
    // Get the quotes relating to this selection
    results = await GetAllQuotes({ seasons: params.id });

    // Show the user the season number
    const getSeasonName =
      await sql`SELECT number FROM wkeight_seasons WHERE id = ${params.id}`;
    const [seasonName] = getSeasonName.rows;
    thisFilteredList = `Season ${seasonName.number}`;
  } else if (params.type === "episodes") {
    // Get the quotes relating to this selection
    results = await GetAllQuotes({ episode: params.id });

    // Show the user the the episode title
    const getEpisodeName =
      await sql`SELECT title FROM wkeight_episodes WHERE id = ${params.id}`;
    thisFilteredList = `${getEpisodeName.rows[0].title}`;
  } else if (params.type === "categories") {
    // Get the quotes relating to this selection
    results = await GetAllQuotes({ category: params.id });

    // Show the user the the category title
    const getCategoryName =
      await sql`SELECT category FROM wkeight_categories WHERE id = ${params.id}`;
    thisFilteredList = `${getCategoryName.rows[0].category}`;
  }

  return (
    <section className="py-8">
      <h2 className="text-blue-400">
        You&apos;re looking at quotes from:{" "}
        <span className="italic">{thisFilteredList}</span>
      </h2>
      <div className="all-quotes-container flex flex-col items-center gap-10 bg-blue-800 py-8 mx-8 my-4 shadow">
        {results.map((quote) => {
          return <IndividualQuote quote={quote} key={quote.id} />;
        })}
      </div>
    </section>
  );
}
