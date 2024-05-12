"use client";

import { useRouter } from "next/navigation";

export default function SeasonSelect({ seasons }) {
  const router = useRouter();

  function handleSeasonSelect(event) {
    console.log("I have been handled");
    console.log(event.target);
    console.log(event.target.selectedIndex);
    router.push(`/sort/seasons/${event.target.value}`);
  }

  return (
    <>
      <div>
        <select
          name="season"
          id="season"
          onChange={handleSeasonSelect}
          className="text-black"
          defaultValue={""}
        >
          <option disabled value="">
            Choose a season..
          </option>
          {seasons.map((season) => {
            return (
              <option key={season.id} value={season.id} text={season.number}>
                {season.number}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
