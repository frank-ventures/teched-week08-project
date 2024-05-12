import QuoteDisplay from "@/app/components/QuoteDisplay";

export default async function IndividualQuote({ params }) {
  return (
    <>
      <QuoteDisplay id={params} />
    </>
  );
}
