import { sql } from "@vercel/postgres";

export default async function GetAllCategories() {
  const categories = await sql`SELECT * FROM wkeight_categories`;

  const allCategories = await categories.rows;
  console.log("all categories have been returned");
  return allCategories;
}
