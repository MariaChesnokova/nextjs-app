import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">Explore NYT Top Stories</h1>
        <p className="text-lg mt-2">Stay informed with the latest news</p>
        <nav className="mt-4 flex justify-center space-x-4">
        <Link href="/" >
            <div id="link" className="text-white hover:underline cursor-pointer">Home</div>
          </Link>
          <Link href="/books" >
            <div className="text-white hover:underline cursor-pointer">Books</div>
          </Link>
          <Link href="/business" >
            <div className="text-white hover:underline cursor-pointer">Business</div>
          </Link>
          <Link href="/movies" >
            <div className="text-white hover:underline cursor-pointer">Movies</div>
          </Link>
          <Link href="/technology" >
            <div className="text-white hover:underline cursor-pointer">Technology</div>
          </Link>
        </nav>
      </div> 
    </header>
  );
};

export default Header;
