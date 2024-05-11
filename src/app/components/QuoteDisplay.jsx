import GetAllQuotes from "../allquotes/GetAllQuotes";
import AddCommentForm from "./AddCommentForm";
import CommentDisplay from "./CommentDisplay";

export default async function QuoteDisplay({ id }) {
  console.log(id);
  // Get the 'id' number from the param in the URL:
  const quoteId = id.id;

  // Call our module function that handles getting all the quotes from the database, and pass in a "where" parameter so it knows which query to execute:
  const [individualQuote] = await GetAllQuotes({ where: quoteId });
  console.log("Result of GetAllQuote call with param is: ", individualQuote);
  const day = individualQuote.upload_date.getDate();
  const month = individualQuote.upload_date.toLocaleString("en", {
    month: "long"
  });
  const year = individualQuote.upload_date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  // const formattedDate = individualQuote.upload_date.toLocaleString("en", {
  //   day: "numeric",
  //   month: "numeric",
  //   year: "numeric"
  // });
  return (
    <>
      <h2>{individualQuote.quote}</h2>
      <p>Said by: {individualQuote.author}</p>
      <p>Quote Category: {individualQuote.category}</p>
      <p>Season: {individualQuote.season}</p>
      <p>Episode: {individualQuote.episode}</p>
      <p>Uploaded on: {formattedDate}</p>
      <p>Added by: {individualQuote.added_by}</p>
      <CommentDisplay postId={quoteId} />
      <AddCommentForm />
    </>
  );
}
