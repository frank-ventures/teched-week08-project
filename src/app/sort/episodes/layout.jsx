import GetAllEpisodes from "@/app/GetData/GetAllEpisodes";
import EpisodeSelect from "./EpisodeSelect";

export default async function EpisodeLayout({ children }) {
  const episodes = await GetAllEpisodes();
  return (
    <>
      <h3 className="text-xl">Choose Episode</h3>

      <div>
        <EpisodeSelect episodes={episodes} />
      </div>
      {children}
    </>
  );
}
