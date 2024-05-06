import { useNavigate } from "react-router-dom";
import "../../App.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const squirrelOne= "https://res.cloudinary.com/dwygxzqku/image/upload/v1714969866/SquirrelQuest/anthony-intraversato-pT_wQgZAIU8-unsplash_kwjyh7.jpg"
  return (
      <>
      {/* add smooth scroll on click */}
        <section className="flex items-center justify-center h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://res.cloudinary.com/dwygxzqku/image/upload/v1714969862/SquirrelQuest/andrey-svistunov-jgFA_cfgNHk-unsplash_klfedb.jpg')" }}>
          
            <h1 className="py-4 text-4xl md:text-6xl font-bold mb-5 bg-black/70 text-white text-center" style={{ fontFamily: 'Silkscreen, sans-serif', fontStyle: 'normal' }}>
                  Welcome to SquirrelQuest
            </h1> 
            
        </section>
        <div className="md:px-20 md:py-5 bg-cover bg-center bg-fixed p-9" style={{ backgroundImage: "url('https://res.cloudinary.com/dwygxzqku/image/upload/v1714890505/SquirrelQuest/jo-1o8-ns6svD0-unsplash_kafaft.jpg')" }}>
              
              <p className="bg-black/70 text-white text-lg md:text-5xl mb-8 p-5" style={{ fontFamily: 'Silkscreen, sans-serif', fontStyle: 'normal' }}>
                Embark on an enchanting adventure through Central Park with SquirrelQuest. Our app guides you to the spots where these furry creatures dwell, allowing you to immerse yourself in their world. Dive into captivating stories about their antics and behaviors, enriching your experience as you explore the park. SquirrelQuest invites you to discover the beauty of nature and the charm of New York's iconic green oasis like never before.
              </p>
        </div>
        {/* <div className="flex justify-center items-center w-full">
              <video loop autoPlay muted>
                <source src="https://s3.amazonaws.com/assets.centralparknyc.org/media/images/Spring-8.mp4" type="video/mp4" />
              </video>
        </div> */}
        <section className="h-screen bg-cover bg-center bg-fixed flex justify-center items-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwygxzqku/image/upload/v1714969866/SquirrelQuest/anthony-intraversato-pT_wQgZAIU8-unsplash_kwjyh7.jpg')" }}>
          <button
            href="#"
            className="bg-black/80 hover:bg-dark-teal hover:text-mint text-white font-bold py-9 px-9 rounded-xl inline-block text-7xl" style={{ fontFamily: 'Silkscreen, sans-serif', fontStyle: 'normal' }}
            onClick={() => navigate("/squirrels")}
          >
            Start Quest!
          </button>
        </section>
        <div className="flex justify-center items-center w-full">
              <video loop autoPlay muted>
                <source src="https://s3.amazonaws.com/assets.centralparknyc.org/media/images/Spring-8.mp4" type="video/mp4" />
              </video>
        </div>
        <section className="h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://res.cloudinary.com/dwygxzqku/image/upload/v1714969864/SquirrelQuest/vincent-van-zalinge-rYZHmeH4dvQ-unsplash_dpgf2c.jpg')" }}> 
        </section>
      </>
  );
};

export default LandingPage;
