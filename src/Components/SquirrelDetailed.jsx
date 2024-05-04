import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

    return (
        <div className='squirrel-details'>
            <h1>About 
                {/* Replace with squirrel name */}
                <em>{isLoading ? "Loading..." : squirrel ? squirrel.unique_squirrel_id : "Insert Squirrel name here"}</em></h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {squirrel ? (
                        <div>
                                <p>
                                    Once upon a sunny afternoon in the heart of NYC's bustling Central Park, a curious squirrel named <em>SQUIRREL NAME HERE</em>, distinguished by the code <em>{squirrel.unique_squirrel_id}</em>, nestled atop a sturdy branch of a grand oak tree. <em>SQUIRREL NAME HERE</em>, with its sleek {squirrel.primary_fur_color ?? "beautiful"} fur and bright eyes, appeared to be lost in thought, its bushy tail draped lazily behind it.
                                </p>
                                <p>
                                    {squirrel.running ? "It LOVES running. " : "It's usually a very lazy and lax squirrel. Doesn't really like running. Loves chilling. "}
                                    {squirrel.chasing ? "It adores chasing. " : "Ignores most things and doesn't like chasing anything. "}
                                    {squirrel.climbing ? "It climbs EVERYTHING. Sometimes even people. But don't worry - it's friendly (no rabies). " : "Doesn't even climb. Kind of odd for a squirrel. "}
                                    {squirrel.eating ? "Loves to eat ANYTHING. But please don't feed it! " : "Will only eat acorns; which is great -- please don't feed it! "}
                                    {squirrel.foraging ? "Loves foraging. This is typical squirrel behavior. " : "After being regulary fed by visitors; it lost interest in foraging - a very typical squirrel behavior. It is currently attending squirrel rehabilitation courses. Please don't feed it! "}
                                    {squirrel.kuks ? "It makes very adorable kuks. " : "This squirrel doesn't make kuks. "}
                                    {squirrel.quaas ? "This quirrel make quaas. " : "It doesn't make quaas. "}
                                    {squirrel.moans ? "It makes moaning sounds! " : "It doesn't moan at all. "}
                                    {squirrel.tail_flags ? "No tail flags! " : "Tail Flags! "}
                                    {squirrel.tail_twitches ? "If you observe closely you'll notice its tail occassionally twitches. " : "It's tail doesn't twitch like some other squirrel's tails. This squirrel is pretty stoic in terms of that. "}
                                    {squirrel.approaches ? "This squirrel is not shy. It usually approaches people. Although very tempting for some, please don't feed it. It's very friendly, so do not worry if it gets near. It goes away if ignored. " : "This squirrel ignores people and their pets. It pretty much keeps to itself. "}
                                    {squirrel.indifferent ? "This squirrel only focuses in its squirrel needs. It's indifferent towards people. " : "If you call the squirrel it might turn to look your way. "}
                                    {squirrel.runs_from ? "This squirrel gets startled easily. " : "This squirrel doesn't get startled easily. "}
                                </p>
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
