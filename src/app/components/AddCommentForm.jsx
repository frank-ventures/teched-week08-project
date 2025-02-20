import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { SubmitButton } from "./SubmitButton";
import ThumbDown from "./ThumbDown";
import ThumbUp from "./ThumbUp";

export default function AddCommentForm(params) {
  const newID = parseInt(params.id);

  async function AddNewComment(formData) {
    "use server";

    const username = formData.get("username");
    const comment = formData.get("comment");
    const pos_neg = formData.get("pos_neg");

    await sql`INSERT INTO wkeight_comments (username, comment, pos_neg, quote_id) VALUES (${username},${comment},${pos_neg},${newID})`;

    revalidatePath(`/allquotes/${params.id}`);

    redirect(`/allquotes/${params.id}`);
  }

  return (
    <>
      <h2 className="text-center mt-5 pt-2 text-2xl text-blue-400">
        Add your comment!
      </h2>
      <form
        action={AddNewComment}
        className="flex flex-col justify-center items-center mx-8 mt-4 mb-4 gap-2 bg-blue-400 p-2 text-black rounded"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Your name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your name please..."
            required
            className="w-60 sm:w-[25rem]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="comment">And your comment</label>
          <textarea
            type="text"
            name="comment"
            id="comment"
            placeholder="Your comment"
            required
            className="w-60 h-28 sm:w-[25rem] sm:h-40"
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p> Do you like this quote?</p>
          <div className="flex gap-2 relative">
            <input
              type="radio"
              name="pos_neg"
              id="positive"
              value="true"
              defaultChecked
            />
            <label
              htmlFor="positive"
              className="icon-label cursor-pointer hover:transform hover:scale-125 hover:duration-200"
            >
              <ThumbUp />
            </label>
          </div>
          <div className="flex gap-2">
            <input type="radio" name="pos_neg" id="negative" value="false" />
            <label
              htmlFor="negative"
              className="icon-label cursor-pointer hover:transform hover:scale-125 hover:duration-200"
            >
              <ThumbDown />
            </label>
          </div>
          <SubmitButton />
        </div>
      </form>
    </>
  );
}
