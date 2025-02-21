import Link from "next/link";

export default function SortLayout({ children }) {
  return (
    <div className="pt-4 px-4 pb-8 flex flex-col items-center flex-shrink-0 flex-grow">
      <h2 className="text-center text-xl mb-4 mt-2 text-blue-400">
        How do you want to filter your Quotes?
      </h2>
      <nav className="sort-nav flex justify-center gap-5 mb-4 w-fit bg-blue-800 py-4 px-16 text-xl text-blue-400 border border-yellow-400">
        <Link href="/sort/seasons">Seasons</Link>
        <Link href="/sort/episodes">Episodes</Link>
        <Link href="/sort/categories">Categories</Link>
      </nav>

      {children}
    </div>
  );
}
