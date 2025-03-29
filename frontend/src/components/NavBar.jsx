import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray-800 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto p-2 px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-white hover:text-blue-500 transition duration-300"
        >
          <h1 className="text-2xl font-bold tracking-wide">Workout Buddy</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
