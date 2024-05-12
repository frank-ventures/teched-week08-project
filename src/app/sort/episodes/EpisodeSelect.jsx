"use client";

import { useRouter } from "next/navigation";

export default function EpisodeSelect({ episodes }) {
  const router = useRouter();

  function handleEpisodeSelect(event) {
    console.log("I have been handled");
    console.log(event.target);
    console.log(event.target.selectedIndex);
    router.push(`/sort/episodes/${event.target.value}`);
  }

  return (
    <>
      <div>
        <select
          name="episodes"
          id="episodes"
          onChange={handleEpisodeSelect}
          className="text-black"
          defaultValue={""}
        >
          <option disabled value="">
            Choose an episode..
          </option>
          {episodes.map((episode) => {
            return (
              <option key={episode.id} value={episode.id} text={episode.title}>
                {episode.title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
