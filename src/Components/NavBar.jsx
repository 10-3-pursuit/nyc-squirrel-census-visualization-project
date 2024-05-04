import React from "react";
import { Squirrel } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="bg-amber-700/90 py-6">
        <div className="flex flex-row items-center ml-5">
          <Link to={"/"} className="flex items-center">
            <div className="text-4xl text-zinc-100 mr-1">Squirrel Sphere</div>
            <Squirrel size={36} className="text-zinc-100" />
          </Link>
          <div className="ml-auto flex space-x-4 mr-5">
            <Link
              to={"/map"}
              className="p-3 bg-yellow-50 rounded-2xl hover:bg-yellow-200"
            >
              Map
            </Link>
            <Link
              to={"/charts"}
              className="p-3 bg-yellow-50 rounded-2xl hover:bg-yellow-200"
            >
              Chart
            </Link>
            <Link
              to={"/about"}
              className="p-3 bg-yellow-50 rounded-2xl hover:bg-yellow-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
