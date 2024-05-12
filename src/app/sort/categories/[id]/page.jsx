import GetAllQuotes from "@/app/allquotes/GetAllQuotes";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function CategoriesQuotesPage({ params }) {
  const categoryQuotes = await GetAllQuotes({ category: params.id });

  console.log("category page param id is", params.id);
  console.log("category quotes are", categoryQuotes);

  // Get the episode title
  const getCategoryName =
    await sql`SELECT category FROM wkeight_categories WHERE id = ${params.id}`;
  const [categoryName] = getCategoryName.rows;

  return (
    <>
      <h2>
        You&apos;re looking at quotes from:{" "}
        <span className="italic">{categoryName.category}</span>
      </h2>
      <div className="all-quotes-container flex flex-col items-center gap-10 bg-blue-800 p-8 mx-8 shadow">
        {categoryQuotes.map((quote) => {
          return (
            <>
              <Link
                key={quote.id}
                href={`../../allquotes/${quote.id}`}
                className="all-quotes-link p-4 bg-yellow-400 text-blue-800  shadow-xl text-2xl w-5/6 font-bold hover:scale-105 transform ease-in duration-200"
              >
                {quote.quote}
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
