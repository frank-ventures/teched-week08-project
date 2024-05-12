import { sql } from "@vercel/postgres";

export default async function GetAllEpisodes() {
  const episodes = await sql`SELECT * FROM wkeight_episodes`;

  const allEpisodes = await episodes.rows;
  console.log("all episodes have been returned");
  return allEpisodes;
}
