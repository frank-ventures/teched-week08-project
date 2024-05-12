import GetAllQuotes from "@/app/GetData/GetAllQuotes.js";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function SeasonsQuotesPage({ params }) {
  const seasonsQuotes = await GetAllQuotes({ seasons: params.id });

  console.log("season page param id is", params.id);
  console.log("season quotes are", seasonsQuotes);

  // Get the episode title
  const getSeasonName =
    await sql`SELECT number FROM wkeight_seasons WHERE id = ${params.id}`;
  const [seasonName] = getSeasonName.rows;

  return (
    <>
      <h2>
        You&apos;re looking at quotes from:{" "}
        <span className="italic capitalize">Season {seasonName.number}</span>
      </h2>
      <div className="all-quotes-container flex flex-col items-center gap-10 bg-blue-800 p-8 mx-8 shadow">
        {seasonsQuotes.map((episode) => {
          return (
            <>
              <Link
                key={episode.id}
                href={`../../allquotes/${episode.id}`}
                className="all-quotes-link p-4 bg-yellow-400 text-blue-800  shadow-xl text-2xl w-5/6 font-bold hover:scale-105 transform ease-in duration-200"
              >
                {episode.quote}
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
