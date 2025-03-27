import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto pt-2 pr-5">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800">Workout Buddy</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
