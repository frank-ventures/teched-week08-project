import GetAllQuotes from "./allquotes/GetAllQuotes";
import Carousel from "./components/Carousel";

export default async function Home() {
  const allQuotes = await GetAllQuotes();
  // console.log(allQuotes);
  return (
    <>
      <h2 className="text-5xl">Welcome to Quote Lasso</h2>
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel allQuotes={allQuotes} />
      </div>
    </>
  );
}
