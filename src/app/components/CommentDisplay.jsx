import { sql } from "@vercel/postgres";
import ThumbUp from "./ThumbUp";
import ThumbDown from "./ThumbDown";

export default async function CommentDisplay({ quoteId }) {
  const comments =
    await sql`SELECT * FROM wkeight_comments WHERE quote_id = ${quoteId}`;

  const thisPostsComments = await comments.rows;
  console.log(thisPostsComments.length);

  return (
    <>
      {thisPostsComments.length > 0 ? (
        <>
          <h2 className="text-center pt-4 text-2xl text-blue-400">Comments!</h2>
          <div className="flex flex-col gap-5 justify-center mx-8 mt-4 ">
            {thisPostsComments.map((comment) => {
              return (
                <div
                  key={comment.id}
                  className="flex justify-between items-center p-2 gap-2 bg-blue-800 h-30 rounded border border-yellow-400 text-blue-400"
                >
                  <p className="pr-2 border-r border-yellow-400">
                    {comment.username}
                  </p>
                  <p>{comment.comment}</p>

                  {comment.pos_neg === true ? <ThumbUp /> : <ThumbDown />}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p className="text-white pt-4 pl-4 italic">
          There are no comments yet...
        </p>
      )}
    </>
  );
}
