import GetAllSeasons from "@/app/GetData/GetAllSeasons";
import SeasonSelect from "./SeasonSelect";

export default async function SeasonLayout({ children }) {
  const seasons = await GetAllSeasons();
  return (
    <>
      <h3 className="text-xl">Choose Season</h3>

      <div>
        <SeasonSelect seasons={seasons} />
      </div>
      {children}
    </>
  );
}
