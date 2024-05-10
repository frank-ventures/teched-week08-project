import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import AddQuoteForm from "../components/AddQuoteForm";

export default async function AddNewQuote() {
  const categories = await sql`SELECT * FROM wkeight_categories`;
  const categoriesResult = await categories.rows;
  //   console.log("Categories result is ", categoriesResult);

  const seasons = await sql`SELECT * FROM wkeight_seasons`;
  const seasonsResult = await seasons.rows;
  //   console.log("Seasons result is ", seasonsResult);

  const episodes = await sql`SELECT * FROM wkeight_episodes `;
  const episodesResult = await episodes.rows;
  //   console.log("Episodes result is ", episodesResult);

  // --- --- --- ---
  // Main Add quote Function
  // --- --- --- ---

  async function AddQuote(formData) {
    "use server";

    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO posts (title, content) VALUES (${title},${content})`;

    revalidatePath("/posts");

    redirect("/posts");
  }

  // --- --- --- ---
  // What's displayed on our page
  // --- --- --- ---
  console.log(userSeasonChoice);
  return (
    <>
      <div>
        <h2>You&apos;re on the add post page</h2>
      </div>
      <AddQuoteForm
        AddQuote={AddQuote}
        categoriesResult={categoriesResult}
        seasonsResult={seasonsResult}
        episodesResult={episodesResult}
        userSeasonChoice={userSeasonChoice}
      />
    </>
  );
}
