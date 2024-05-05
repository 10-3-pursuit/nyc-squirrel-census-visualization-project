import React, { useEffect, useState } from 'react';
import SquirrelSingle from './SquirrelSingle';
import { useNavigate } from 'react-router-dom';

import {reverseRegion} from '../Helpers/SquirrelIndexHelper'


const SQUIRREL_API = import.meta.env.VITE_SQUIRREL_BASE_URL;
const VITE_SQUIRREL_TOKEN = import.meta.env.VITE_SQUIRREL_TOKEN;


function SquirrelIndex() {
    const [squirrels, setSquirrels] = useState([]);
    const [filteredSquirrels, setFilteredSquirrels] = useState([]);
    const [filter, setFilter] = useState(null); 
    const navigate = useNavigate();


    useEffect(() => {
        const fetchSquirrels = async () => {
            try {
                const response = await fetch(`${SQUIRREL_API}?$$app_token=${VITE_SQUIRREL_TOKEN}&running=true&$order=date DESC&$limit=51`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setSquirrels(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSquirrels();
    }, []);

        // Effect to update filtered squirrels when filter changes
        useEffect(() => {
            if (filter) {
                console.log("THe Filter : ",filter)
                // Reverse the region to get the hectare-letter combinations
                const region = reverseRegion(filter);
                // Filter squirrels based on the region
                const filtered = squirrels.filter(squirrel => {
                    const squirrelLocation = squirrel.hectare;
                    return region.some(hectareLetter => squirrelLocation === hectareLetter);
                });
                console.log(filtered)
                setFilteredSquirrels(filtered);
            } else {
                // If no filter is selected, set filtered squirrels to the original list
                setFilteredSquirrels(squirrels);
            }
        }, [filter, squirrels]);

    const handleClick = (id) => {
        navigate(`/squirrels/${id}`);
    };


    return (
        <div className="container mx-auto px-20 p-10">
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="my-4 p-2">
                <option value="">Select Location</option>
                <option value="EastSouth">SouthEast</option>
                <option value="EastCenter">CenterEast</option>
                <option value="EastNorth">NorthEast</option>
                <option value="CenterSouth">CenterSouth</option>
                <option value="Center">Center</option>
                <option value="CenterNorth">CenterNorth</option>
                <option value="WestSouth">SouthWest</option>
                <option value="WestCenter">CenterWest</option>
                <option value="WestNorth">NorthCenter</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSquirrels &&
                    filteredSquirrels
                        .filter(squirrel => squirrel.unique_squirrel_id !== null)
                        .map(squirrel => (
                            <div key={squirrel.unique_squirrel_id} className="h-full cursor-pointer" onClick={() => handleClick(squirrel.unique_squirrel_id)}>
                                <SquirrelSingle
                                    squirrel={squirrel}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

export default SquirrelIndex;
