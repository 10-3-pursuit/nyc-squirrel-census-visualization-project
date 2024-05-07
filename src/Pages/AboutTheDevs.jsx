import React from "react";
import AboutDetails from "../Components/AboutDetails";

const AboutTheDevs = () => {
  return (
    <div className="bg-amber-50">
      <div className="py-12 text-center text-4xl font-bold">Meet the Team</div>
      <hr className="mx-10 border-2 border-black" />
      <AboutDetails />
    </div>
  );
};

export default AboutTheDevs;
