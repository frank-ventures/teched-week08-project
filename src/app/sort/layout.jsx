import Link from "next/link";

export default function SortLayout({ children }) {
  return (
    <>
      <h2 className="text-center text-xl mb-4 mt-2">
        How do you want to filter your Quotes?
      </h2>
      <nav className="sort-nav flex justify-center gap-5 mb-4 bg-blue-800 p-4">
        <Link href="/sort/seasons">Seasons</Link>
        <Link href="/sort/episodes">Episodes</Link>
        <Link href="/sort/categories">Categories</Link>
      </nav>

      {children}
    </>
  );
}
