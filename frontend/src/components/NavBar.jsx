import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-[#fff]">
      <div className="max-w-[1400px] m-0 mx-auto p-2.5 px-5 flex items-center justify-between">
        <Link to="/" className="text-[#333]">
          <h1 className="text-2xl font-bold text-gray-800">Workout Buddy</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
