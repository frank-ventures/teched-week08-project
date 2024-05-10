import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-5 bg-slate-500 p-5">
      <h2>Quote Lasso</h2>
      <nav className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/allquotes">All Quotes</Link>
        <Link href="/about">About</Link>
        <Link href="/addquote">Add New Quote</Link>
      </nav>
    </header>
  );
}
