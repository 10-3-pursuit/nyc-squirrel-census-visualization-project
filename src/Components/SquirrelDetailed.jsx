import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate, getImageUrl, generateNameFromID } from '../Helpers/SingleSquirrelHelper';

const SQUIRREL_API = import.meta.env.VITE_SQUIRREL_BASE_URL;
const VITE_SQUIRREL_TOKEN = import.meta.env.VITE_SQUIRREL_TOKEN;

const SquirrelDetailed = () => {
    const [squirrel, setSquirrel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        async function fetchSquirrel() {
            try {
                const response = await fetch(`${SQUIRREL_API}?$$app_token=${VITE_SQUIRREL_TOKEN}`);
                if (response.ok) {
                    const data = await response.json();           
                    const squirrelById = data.find(squirrel => squirrel.unique_squirrel_id === id);
                    if (squirrelById) {
                        setSquirrel(squirrelById);
                    } else {
                        console.log('Squirrel with ID', id, 'not found.');
                    }
                } else {
                    console.error('Failed to fetch squirrel data');
                }
            } catch (error) {
                console.error('Error fetching squirrel data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchSquirrel();
    }, [id]);

    // if passed as prop from squirrelSingle.jsx file then will need to define it in app.jsx as well when adding it to component with Route - so defining it again here using helper fx
    const imageUrl = squirrel && getImageUrl(squirrel.primary_fur_color, squirrel.unique_squirrel_id);
    const squirrelName = squirrel && generateNameFromID(squirrel.unique_squirrel_id);
    return (
        // https://res.cloudinary.com/dwygxzqku/image/upload/v1714886654/SquirrelQuest/acorn-background.jpg
        // <div className="bg-dark-teal text-beige px-5 md:px-20 h-screen">
        <div className="text-beige px-5 py-10 md:px-20 md:py-5 h-screen bg-cover bg-center bg-fixed md:bg-scroll" style={{ backgroundImage: "url('https://res.cloudinary.com/dwygxzqku/image/upload/v1714890505/SquirrelQuest/jo-1o8-ns6svD0-unsplash_kafaft.jpg')" }}>
            {/* <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ..."> */}
            <br/>
            <h1 className="grid place-items-center box-decoration-clone bg-gradient-to-r from-light-teal/80 to-red-orange/80 text-white text-7xl px-10 rounded-s">
                <p class="italic hover:not-italic"> {isLoading ? "Loading..." : squirrel ? squirrelName : "Ms. Squirrel No Name"}</p>
            </h1>
            <br/>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid place-items-center">
                    {squirrel ? (
                        // for transparent effect and keeping size consistent plus padding
                            <div className="grid place-items-center w-400 rounded-xl bg-black/40 p-10">
                                <div className="md:flex-shrink-0">
                                    {/* put a hover effect thingy */}
                                    <img className="max-h-200 rounded-xl shadow-xl object-cover transition duration-300 ease-in-out transform hover:scale-105" src={imageUrl} alt={squirrelName}/>
                                </div>
                                <br/>
                                <h2 className="italic hover:not-italic text-4xl">About {isLoading ? "Loading..." : squirrel ? squirrelName : "Ms. Squirrel No Name"}:</h2>
                                <h3 className='text-2xl'>
                                    <em>{squirrelName}</em> was spotted {squirrel.location ?? "at Central Park"} {squirrel.specific_location ?? "just chilling"} on {formatDate(squirrel.date)}!
                                </h3>
                                <p className='w-400 rounded-xl bg-black/40 p-3 text-1xl'>
                                    Once upon a sunny afternoon in the heart of NYC's bustling Central Park, a curious squirrel named <em>{squirrelName}</em>, distinguished by the code <em>{squirrel.unique_squirrel_id}</em>, nestled atop a sturdy branch of a grand oak tree. <em>{squirrelName}</em>, with its sleek {squirrel.primary_fur_color ?? "unique"}, {squirrel.highlight_fur_color ?? "beautiful"} fur and bright eyes, appeared to be lost in thought, its bushy tail draped lazily behind it.
                                {/* </p>
                                <p className='w-400 rounded-xl bg-black/40 p-3 text-1xl'> */}
                                <br/>
                                <br/>
                                    {squirrel.running ? "It LOVES running. " : "It's usually a very lazy and lax squirrel. It doesn't really like running - which is kind of atypical for a squirrel. LOVES relaxing. "}
                                    {squirrel.chasing ? "It adores chasing. " : "Ignores most things and doesn't like chasing anything. "}
                                    {squirrel.climbing ? "It climbs EVERYTHING; sometimes even people. But don't worry - it's friendly (no rabies). If you're afraid of squirrels, just ignore it. It will go away ." : "This squirrel doesn't climb, which is kind of odd for a squirrel. "}
                                    {squirrel.eating ? "Loves to eat ANYTHING. But please don't feed it! It harms the squirrel. " : "Will only eat acorns; which is great -- please don't feed it! "}
                                    {squirrel.foraging ? "Loves foraging. This is typical squirrel behavior. " : "After being regulary fed by visitors; it lost interest in foraging - which is a very typical squirrel kind of behavior. It is currently attending squirrel rehabilitation courses. Be supportive - Please don't feed it! "}
                                    {squirrel.kuks ? "It makes very adorable kuks. " : "This squirrel doesn't make kuks. "}
                                    {squirrel.quaas ? "This quirrel make quaas. " : "It doesn't make quaas. "}
                                    {squirrel.moans ? "It makes moaning sounds! " : "It doesn't moan at all. "}
                                    {squirrel.tail_flags ? "No tail flags! " : "Tail Flags! "}
                                    {squirrel.tail_twitches ? "If you observe closely you'll notice its tail occassionally twitches. " : "It's tail doesn't twitch like some other squirrel's tails. This squirrel is pretty stoic in terms of tail twitching. "}
                                    {squirrel.approaches ? "This squirrel is not shy. It usually approaches people. Although very tempting for some, please don't feed it. It's very friendly, so do not worry if it gets near. It goes away if ignored. " : "This squirrel ignores people and their pets. It pretty much keeps to itself. "}
                                    {squirrel.indifferent ? "This squirrel only focuses in its squirrel needs. It's indifferent towards people. " : "If you call the squirrel's name it might turn to look your way - it recognizes its name. "}
                                    {squirrel.runs_from ? "This squirrel gets startled easily. " : "This squirrel doesn't get startled easily. "}
                                </p>
                                {/* </div> */}
                        </div>
                    ) : (
                        <p>No squirrel found with ID: {id}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default SquirrelDetailed;
