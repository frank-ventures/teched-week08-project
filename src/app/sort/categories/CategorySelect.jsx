"use client";

import { useRouter } from "next/navigation";

export default function CategorySelect({ categories }) {
  const router = useRouter();

  function handleCategorySelect(event) {
    console.log("I have been handled");
    console.log(event.target);
    console.log(event.target.selectedIndex);
    router.push(`/sort/categories/${event.target.value}`);
  }

  return (
    <>
      <div>
        <select
          name="categories"
          id="categories"
          onChange={handleCategorySelect}
          className="text-black"
          defaultValue={""}
        >
          <option disabled value="">
            Choose a category..
          </option>
          {categories.map((cat) => {
            return (
              <option key={cat.id} value={cat.id} text={cat.category}>
                {cat.category}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
