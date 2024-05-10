import QuoteDisplay from "@/app/components/QuoteDisplay";
import { sql } from "@vercel/postgres";

export default async function IndividualQuote({ params }) {
  return (
    <>
      <QuoteDisplay id={params} />
    </>
  );
}
