import Image from "next/image";
import { Inter } from "next/font/google";
import WrappedTekNews from "./components/newsItem/NewsItem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 bg-gradient-to-br from-blue-400 to-teal-500`}
    >
       <WrappedTekNews />
    </main>
  );
}
