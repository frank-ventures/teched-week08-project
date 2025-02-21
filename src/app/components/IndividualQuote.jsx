import Link from "next/link";

export default function IndividualQuote({ quote }) {
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
}
