import Link from "next/link";
import GetAllQuotes from "../GetData/GetAllQuotes";

export default async function AllQuotesPage() {
  const allQuotes = await GetAllQuotes();
  return (
    <section>
      <article className="p-2 mt-4 flex flex-col justify-center items-center text-blue-400 italic">
        <h2>All the quotes in our database</h2>
        <p>Click one to see the comments and full details</p>
      </article>

      <section className="all-quotes-container flex flex-col items-center gap-10 bg-blue-800 p-8 mx-8 my-8 shadow">
        {allQuotes.map((quote) => {
          return (
            <Link
              key={quote.id}
              href={`allquotes/${quote.id}`}
              className="all-quotes-link p-6 bg-yellow-400 text-blue-800 shadow-xl text-2xl w-5/6 font-bold hover:scale-105 transform ease-in duration-200"
            >
              {quote.quote}
            </Link>
          );
        })}
      </section>
    </section>
  );
}
