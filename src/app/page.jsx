import Link from "next/link";
import Carousel from "./components/Carousel";

export default async function Home() {
  // const allQuotes = await GetAllQuotes();

  return (
    <div className="flex flex-col justify-center  h-[75%]">
      <h2 className="text-3xl text-center">Welcome to Quote Lasso</h2>
      <p className="text-center pb-4">
        A place for <span className="text-red-500 shadow">Ted Lasso</span> fans
        to browse, add and enjoy quotes!
      </p>
      <div className="flex justify-center items-center">
        <Link
          href="/allquotes"
          className="p-4 border-blue-800 border-2 rounded bg-yellow-400 text-blue-800"
        >
          See all our quotes
        </Link>
        {/* <Carousel allQuotes={allQuotes} /> */}
      </div>
    </div>
  );
}
