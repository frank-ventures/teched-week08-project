import GetAllCategories from "@/app/GetData/GetAllCategories";
import CategorySelect from "./CategorySelect";

export default async function CategoriesLayout({ children }) {
  const categories = await GetAllCategories();
  return (
    <>
      <h3 className="text-xl">Choose Category</h3>

      <div>
        <CategorySelect categories={categories} />
      </div>
      {children}
    </>
  );
}
