import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quote Lasso",
  description: "A collection of quotes from the Ted Lasso TV series"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-page">
          <Header />
          {children}
        </div>
        <footer className=" w-screen bg-slate-800 p-5 text-center">
          By <a href="https://www.linkedin.com/in/frankie-shrieves/">Frankie</a>{" "}
          | Thanks to{" "}
          <a href="https://www.imdb.com/title/tt10986410/">Ted Lasso</a>
        </footer>
      </body>
    </html>
  );
}
