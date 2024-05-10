import { sql } from "@vercel/postgres";

export default async function CommentDisplay({ postId }) {
  console.log("post id is ", postId);
  const comments =
    await sql`SELECT * FROM wkeight_comments WHERE id = ${postId}`;

  const [thisPostsComments] = await comments.rows;
  console.log(thisPostsComments);

  return (
    <>
      {thisPostsComments ? (
        <>
          <h2>Comments are here:</h2>
          <p>{thisPostsComments.username}</p>
          <p>{thisPostsComments.comment}</p>
        </>
      ) : (
        <p>There are no comments</p>
      )}
    </>
  );
}
