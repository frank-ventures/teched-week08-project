import GetAllQuotes from "@/app/allquotes/GetAllQuotes";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function EpisodeQuotesPage({ params }) {
  const episodeQuotes = await GetAllQuotes({ episode: params.id });

  console.log("epoisode page param id is", params.id);
  console.log("episode quotes are", episodeQuotes);

  // Get the episode title
  const getEpisodeName =
    await sql`SELECT title FROM wkeight_episodes WHERE id = ${params.id}`;
  const [episodeName] = getEpisodeName.rows;

  return (
    <>
      <h2>
        You&apos;re looking at quotes from:{" "}
        <span className="italic">{episodeName.title}</span>
      </h2>
      <div className="all-quotes-container flex flex-col items-center gap-10 bg-blue-800 p-8 mx-8 shadow">
        {episodeQuotes.map((episode) => {
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
