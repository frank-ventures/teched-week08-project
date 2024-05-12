import { sql } from "@vercel/postgres";

export default async function GetAllQuotes(params) {
  console.log("params are ", params);
  let quotes;

  if (!params) {
    console.log("Params are empty");

    quotes = await sql`SELECT
  wkeight_quotes.id, quote, author , upload_date, added_by,
  wkeight_categories.category AS category,
  wkeight_seasons.number AS season,
  wkeight_episodes.number AS episode
  FROM wkeight_quotes
  JOIN wkeight_categories ON wkeight_quotes.category_id = wkeight_categories.id
  JOIN wkeight_seasons ON wkeight_quotes.season_id = wkeight_seasons.id
  JOIN wkeight_episodes ON wkeight_quotes.episode_id = wkeight_episodes.id 
`;
  } else if (params.where) {
    console.log("Params are ", params);
    quotes = await sql`SELECT
    wkeight_quotes.id, quote, author , upload_date, added_by,
    wkeight_categories.category AS category,
    wkeight_seasons.id AS season,
    wkeight_episodes.id AS episode
    FROM wkeight_quotes
    JOIN wkeight_categories ON wkeight_quotes.category_id = wkeight_categories.id
    JOIN wkeight_seasons ON wkeight_quotes.season_id = wkeight_seasons.id
    JOIN wkeight_episodes ON wkeight_quotes.episode_id = wkeight_episodes.id
    WHERE wkeight_quotes.id = ${params.where}
  `;
  } else if (params.episode) {
    console.log("Params are ", params);
    quotes = await sql`SELECT
    wkeight_quotes.id, quote, author , upload_date, added_by,
    wkeight_categories.category AS category,
    wkeight_seasons.id AS season,
    wkeight_episodes.id AS episode
    FROM wkeight_quotes
    JOIN wkeight_categories ON wkeight_quotes.category_id = wkeight_categories.id
    JOIN wkeight_seasons ON wkeight_quotes.season_id = wkeight_seasons.id
    JOIN wkeight_episodes ON wkeight_quotes.episode_id = wkeight_episodes.id
    WHERE wkeight_quotes.episode_id = ${params.episode}
  `;
  } else if (params.category) {
    console.log("Params are ", params);
    quotes = await sql`SELECT
  wkeight_quotes.id, quote, author , upload_date, added_by,
  wkeight_categories.category AS category,
  wkeight_seasons.id AS season,
  wkeight_episodes.id AS episode
  FROM wkeight_quotes
  JOIN wkeight_categories ON wkeight_quotes.category_id = wkeight_categories.id
  JOIN wkeight_seasons ON wkeight_quotes.season_id = wkeight_seasons.id
  JOIN wkeight_episodes ON wkeight_quotes.episode_id = wkeight_episodes.id
  WHERE wkeight_quotes.category_id = ${params.category}
`;
  }

  const allQuotes = await quotes.rows;
  console.log("all quotes have been returned");
  return allQuotes;
}
