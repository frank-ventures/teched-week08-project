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

    const quote = formData.get("quote");
    const author = formData.get("author");
    const category = formData.get("category");
    const season = formData.get("season");
    const episode = formData.get("episode");
    const added_by = formData.get("added_by");
    console.log(
      "Submission is ",
      quote,
      author,
      category,
      season,
      episode,
      added_by
    );

    await sql`INSERT INTO wkeight_quotes(quote, author, category_id, season_id, episode_id, added_by) VALUES (${quote}, ${author}, ${category}, ${season}, ${episode}, ${added_by})`;

    revalidatePath("/allquotes");

    redirect("/allquotes");
  }

  // --- --- --- ---
  // What's displayed on our page
  // --- --- --- ---
  return (
    <>
      <div>
        <h2 className="text-xl text-center">
          Have we missed a great quote? Add it here!
        </h2>
      </div>
      <AddQuoteForm
        AddQuote={AddQuote}
        categoriesResult={categoriesResult}
        seasonsResult={seasonsResult}
        episodesResult={episodesResult}
      />
    </>
  );
}
