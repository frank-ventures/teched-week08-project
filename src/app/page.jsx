import Link from "next/link";
import Carousel from "./components/Carousel";

export default async function Home() {
  // const allQuotes = await GetAllQuotes();

  return (
    <main className="flex flex-col justify-center items-center h-full ">
      <section className="h-2/4 w-2/4 bg-blue-400 border-2 border-blue-800 flex flex-col gap-6 items-center justify-center">
        <article>
          <h2 className="text-3xl text-center mb-2 text-blue-800">
            Welcome to Quote Lasso
          </h2>
          <p className="text-center pb-4">
            A place for{" "}
            <span className="text-red-600 font-bold">Ted Lasso</span> fans to
            browse, add and enjoy quotes!
          </p>
        </article>

        <Link
          href="/allquotes"
          className="p-4 border-blue-800 border-2 rounded bg-yellow-400 text-blue-800 shadow-md"
        >
          See all our quotes
        </Link>
        {/* <Carousel allQuotes={allQuotes} /> */}
      </section>
    </main>
  );
}
