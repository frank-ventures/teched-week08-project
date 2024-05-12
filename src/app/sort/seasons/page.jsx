import { sql } from "@vercel/postgres";

export default async function SeasonsPage() {
  const seasons = await sql`SELECT * FROM wkeight_seasons`;
  console.log(seasons.rows);
  return (
    <>
      <h2>I am the seasons apge</h2>
      <div>
        <h3 className="text-xl">Seasons</h3>
        {seasons.rows.map((season) => {
          return <p key={season.id}>{season.number}</p>;
        })}
      </div>
    </>
  );
}
