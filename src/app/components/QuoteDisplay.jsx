import { sql } from "@vercel/postgres";
import GetAllQuotes from "../allquotes/GetAllQuotes";
import AddCommentForm from "./AddCommentForm";
import CommentDisplay from "./CommentDisplay";
import Link from "next/link";

export default async function QuoteDisplay({ id }) {
  console.log(id);
  // Get the 'id' number from the param in the URL:
  const quoteId = id.id;

  // Call our module function that handles getting all the quotes from the database, and pass in a "where" parameter so it knows which query to execute:
  const [individualQuote] = await GetAllQuotes({ where: quoteId });
  console.log("Result of GetAllQuote call with param is: ", individualQuote);

  // Format the date into a nice readable format
  const day = individualQuote.upload_date.getDate();
  const month = individualQuote.upload_date.toLocaleString("en", {
    month: "long"
  });
  const year = individualQuote.upload_date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  // These next 3 lines allow us to append the Episode Title onto the display of the quote
  const quoteEpisodeId = individualQuote.episode;
  const episodeReturn =
    await sql`SELECT * FROM wkeight_episodes WHERE id = ${quoteEpisodeId}`;
  const [episodeSingle] = episodeReturn.rows;

  return (
    <>
      <div className="flex flex-col gap-1 quote-container p-5 mt-4 bg-blue-800">
        <div className="quote-text bg-yellow-400 p-8 shadow-lg mb-4">
          <h2 className="text-4xl text-blue-900">
            &ldquo;{individualQuote.quote}&rdquo;
          </h2>
          <p className="flex justify-end pr-20 italic text-blue-800">
            {" "}
            - {individualQuote.author}
          </p>
        </div>

        <p className="italic">{individualQuote.category}</p>

        <Link
          className="underline hover:text-yellow-400"
          href={`/sort/season/${individualQuote.season}`}
        >
          Season {individualQuote.season}
        </Link>
        <Link
          className="underline hover:text-yellow-400"
          href={`/sort/episodes/${individualQuote.episode}`}
        >
          Episode {individualQuote.episode} - &ldquo;{episodeSingle.title}
          &rdquo;
        </Link>
        <p>Uploaded on {formattedDate}</p>
        <p>Added by {individualQuote.added_by}</p>
      </div>

      <CommentDisplay quoteId={quoteId} />
      <AddCommentForm id={quoteId} />
    </>
  );
}
