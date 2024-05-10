import { sql } from "@vercel/postgres";
import Link from "next/link";
import GetAllQuotes from "./GetAllQuotes";

export default async function AllQuotesPage() {
  // const quotes = await sql`SELECT
  //   wkeight_quotes.id, quote, author, reference ,
  //   wkeight_categories.category AS category,
  //   wkeight_sources.type AS source
  //   FROM wkeight_quotes
  //   JOIN wkeight_categories ON wkeight_quotes.category_id = wkeight_categories.id
  //   JOIN wkeight_sources ON wkeight_quotes.source_id = wkeight_sources.id
  // `;
  // const allQuotes = await quotes.rows;
  // console.log(allQuotes);

  const allQuotes = await GetAllQuotes();
  console.log("All quotes page has called GetAllQuotes");
  return (
    <>
      <h2>All the quotes</h2>
      <div className="flex flex-col gap-3">
        {allQuotes.map((quote) => {
          return (
            <Link key={quote.id} href={`allquotes/${quote.id}`}>
              {quote.quote}
            </Link>
          );
        })}
      </div>
    </>
  );
}
