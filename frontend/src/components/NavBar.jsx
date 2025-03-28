import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-[1400px] mx-auto p-3 px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-gray-900 hover:text-blue-500 transition duration-300"
        >
          <h1 className="text-3xl font-extrabold">Workout Buddy</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
