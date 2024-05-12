import { sql } from "@vercel/postgres";
import ThumbUp from "./ThumbUp";
import ThumbDown from "./ThumbDown";

export default async function CommentDisplay({ quoteId }) {
  console.log("post id is ", quoteId);
  const comments =
    await sql`SELECT * FROM wkeight_comments WHERE quote_id = ${quoteId}`;

  const thisPostsComments = await comments.rows;
  console.log("This posts comments are ", thisPostsComments);
  console.log("post comments.length = ", thisPostsComments.length);

  return (
    <>
      {thisPostsComments ? (
        <>
          <h2 className="text-center border-t-4 text-2xl">Comments!</h2>
          <div className="flex flex-col gap-5 justify-center mx-8 mt-4 ">
            {thisPostsComments.map((comment) => {
              return (
                <div
                  key={comment.id}
                  className="flex justify-between items-center p-2 gap-2 bg-blue-800 h-30 rounded border border-yellow-400"
                >
                  <p>{comment.username}</p>
                  <p>{comment.comment}</p>

                  {comment.pos_neg === true ? <ThumbUp /> : <ThumbDown />}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p className="text-white">There are no comments</p>
      )}
    </>
  );
}
