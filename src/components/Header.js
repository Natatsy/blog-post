import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white p-6">
      <nav className="flex justify-center items-center">
        <h1 className="text-5xl font-bold">
          <Link to="/">My Blog</Link>
        </h1>
      </nav>
    </header>
  );
};

export default Header;
