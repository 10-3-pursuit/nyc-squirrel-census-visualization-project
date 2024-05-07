import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="py-24 relative">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/dvmczcg3f/video/upload/v1715037393/throwaways/squirrelvid_jbcpm6.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <section className="text-center bg-green-400/30 p-4 mx-48 rounded-lg inline-block relative z-10">
        <h1 className="text-6xl mb-6 font-semibold text-white">
          Welcome to Squirrel Sphere: Your Gateway to Central Park's Squirrel
          Kingdom
        </h1>
        <p className="text-2xl font-semibold text-white">
          Dive into the bustling world of Central Park's squirrels with our
          innovative web app, combining advanced mapping technology and
          insightful demographic charts. Explore the elusive black squirrels,
          the rarest gem in the park, through our curated data on behavior,
          distribution, and population trends. Whether you're a seasoned
          wildlife enthusiast or a curious urban explorer, Squirrel Sphere
          invites you to uncover the mysteries of Central Park's squirrel
          kingdom. Start your adventure today and navigate the wonders of
          nature, one squirrel at a time!
        </p>
      </section>

      {/* Button */}
      <Link to={"/charts"} className="flex justify-center relative z-10 mt-6">
        <button className="bg-green-500/30 text-3xl rounded-2xl text-center p-5 m-4 hover:bg-green-200/50 hover:border-2 hover:border-green-500/90 text-white font-bold">
          Let's find some squirrels!!
        </button>
      </Link>
    </div>
  );
};

export default Home;
