import React from "react";
import { Squirrel } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className="bg-amber-700/90 py-6">
        <div className="flex flex-row items-center ml-5">
          <div className="text-2xl text-zinc-100 mr-1">Squirrel Sphere</div>
          <Squirrel size={36} className="text-zinc-100" />
          <div className="ml-auto flex justify-contents space-x-4 mr-5">
            <button className="p-3 bg-yellow-50 rounded-2xl hover:bg-yellow-200">
              Map
            </button>
            <button className="p-3 bg-yellow-50 rounded-2xl hover:bg-yellow-200">
              Chart
            </button>
            <button className="p-3 bg-yellow-50 rounded-2xl hover:bg-yellow-200">
              About
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
