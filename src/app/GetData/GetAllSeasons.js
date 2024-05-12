import { sql } from "@vercel/postgres";

export default async function GetAllSeasons() {
  const seasons = await sql`SELECT * FROM wkeight_seasons`;

  const allSeasons = await seasons.rows;
  console.log("all seasons have been returned");
  return allSeasons;
}
