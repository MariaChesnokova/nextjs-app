import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">Explore NYT Top Stories</h1>
        <p className="text-lg mt-2">Stay informed with the latest news</p>
      </div>
    </header>
  );
};

export default Header;
