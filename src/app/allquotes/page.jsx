import GetAllQuotes from "../GetData/GetAllQuotes";
import IndividualQuote from "../components/IndividualQuote";

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
          return <IndividualQuote quote={quote} />;
        })}
      </section>
    </section>
  );
}
