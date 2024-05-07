import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black px-10 py-10">
        <div className="flex flex-row justify-between items-center">
          <Link to={"/"}>
            <div className="lg:pr-16 font-bold text-2xl text-white pr-10">
              SS
            </div>
          </Link>
          <a
            href={
              "https://github.com/BSoto85/nyc-squirrel-census-visualization-project?tab=readme-ov-file"
            }
            target="_blank"
            className=""
          >
            <BsGithub
              size={24}
              className=" hover:text-amber-700/90 text-white"
            />
          </a>
          <span className=" text-white">&#169; 2024 Squirrel Sphere Inc.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
