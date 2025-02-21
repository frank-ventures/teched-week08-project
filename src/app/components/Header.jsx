import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-5 justify-between items-center bg-blue-400 p-5">
      <Link href={"/"}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="p-5 bg-yellow-400 text-blue-800 text-xl border-blue-800 border-2">
            Quote Lasso
          </h2>
          <p className="italic text-blue-800">&apos;Believe&apos;</p>
        </div>
      </Link>

      <nav className="header-nav flex flex-wrap px-2 gap-4 w-5/6 justify-evenly text-blue-800">
        <Link href="/">Home</Link>
        <Link href="/allquotes">All Quotes</Link>
        {/* <Link href="/about">About</Link> */}
        <Link href="/sort">Sort</Link>
        <Link href="/addquote">New Quote</Link>
      </nav>
    </header>
  );
}
