import { sql } from "@vercel/postgres";
import Link from "next/link";
import GetAllQuotes from "../GetData/GetAllQuotes";

export default async function AllQuotesPage() {
  const allQuotes = await GetAllQuotes();
  console.log("All quotes page has called GetAllQuotes");
  return (
    <>
      <div className="p-2  flex flex-col justify-center items-center">
        {" "}
        <h2>All the quotes in our database</h2>
        <p>Click one to see the comments and full details</p>
      </div>

      <div className="all-quotes-container flex flex-col items-center gap-10 bg-blue-800 p-8 mx-8 shadow">
        {allQuotes.map((quote) => {
          return (
            <Link
              key={quote.id}
              href={`allquotes/${quote.id}`}
              className="all-quotes-link p-4 bg-yellow-400 text-blue-800  shadow-xl text-2xl w-5/6 font-bold hover:scale-105 transform ease-in duration-200"
            >
              {quote.quote}
            </Link>
          );
        })}
      </div>
    </>
  );
}
