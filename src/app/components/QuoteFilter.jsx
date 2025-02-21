"use client";

import { useRouter } from "next/navigation";

export default function QuoteFilter({ filterType, filteredData }) {
  const router = useRouter();

  function handleFilterSelect(event) {
    // console.log("I have been handled");
    // console.log(event.target);
    // console.log(event.target.selectedIndex);
    router.push(`/sort/${filterType}/${event.target.value}`);
  }

  return (
    <>
      <div>
        <select
          name={`${filterType}`}
          id={`${filterType}`}
          onChange={handleFilterSelect}
          className="text-black"
          defaultValue={""}
        >
          <option disabled value="">
            {filterType === "categories" && "Choose a category.."}
            {filterType === "seasons" && "Choose a season.."}
            {filterType === "episodes" && "Choose an episode.."}
          </option>
          {filteredData.map((data) => {
            return (
              <>
                {filterType === "categories" && (
                  <option key={data.id} value={data.id} text={data.category}>
                    {data.category}
                  </option>
                )}

                {filterType === "seasons" && (
                  <option key={data.id} value={data.id} text={data.number}>
                    {data.number}
                  </option>
                )}
                {filterType === "episodes" && (
                  <option key={data.id} value={data.id} text={data.title}>
                    {data.title}
                  </option>
                )}
              </>
            );
          })}
        </select>
      </div>
    </>
  );
}
