import GetAllCategories from "@/app/GetData/GetAllCategories";
import GetAllEpisodes from "@/app/GetData/GetAllEpisodes";
import GetAllSeasons from "@/app/GetData/GetAllSeasons";
import QuoteFilter from "@/app/components/QuoteFilter";

export default async function SortLayout({ children, params }) {
  const seasons = await GetAllSeasons();
  const categories = await GetAllCategories();
  const episodes = await GetAllEpisodes();

  const dynamicFilterSelection = params.type;
  console.log(dynamicFilterSelection);

  const filteredData =
    (dynamicFilterSelection === "seasons" && seasons) ||
    (dynamicFilterSelection == "categories" && categories) ||
    (dynamicFilterSelection === "episodes" && episodes);

  return (
    <>
      <h3 className="text-xl text-blue-400">
        Choose{" "}
        {dynamicFilterSelection === "categories"
          ? "Category"
          : dynamicFilterSelection.charAt(0).toUpperCase() +
            dynamicFilterSelection.slice(1).slice(0, -1)}
      </h3>

      <div>
        <QuoteFilter
          filterType={dynamicFilterSelection}
          filteredData={filteredData}
        />
      </div>
      {children}
    </>
  );
}
