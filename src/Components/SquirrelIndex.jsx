import React, { useEffect, useState } from 'react';
import SquirrelSingle from './SquirrelSingle';
import { useNavigate } from 'react-router-dom';

import {reverseRegion} from '../Helpers/SquirrelIndexHelper'
import { generateNameFromID } from '../Helpers/SingleSquirrelHelper';



const SQUIRREL_API = import.meta.env.VITE_SQUIRREL_BASE_URL;
const VITE_SQUIRREL_TOKEN = import.meta.env.VITE_SQUIRREL_TOKEN;


function SquirrelIndex() {
    const [squirrels, setSquirrels] = useState([]);
    const [filteredSquirrels, setFilteredSquirrels] = useState([]);
    const [filter, setFilter] = useState(null); 
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSearchSquirrels, setFilteredSearchSquirrels] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchSquirrels = async () => {
            try {
                const response = await fetch(`${SQUIRREL_API}?$$app_token=${VITE_SQUIRREL_TOKEN}&running=true&$order=date DESC&$limit=72`);
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
            // Reverse the region to get the hectare-letter combinations
            const region = reverseRegion(filter);
            // Filter squirrels based on the region
            const filtered = squirrels.filter(squirrel => {
                const squirrelLocation = squirrel.hectare;
                return region.some(hectareLetter => squirrelLocation === hectareLetter);
            });
            setFilteredSquirrels(filtered);
        } else {
            // If no filter is selected, set filtered squirrels to the original list
            setFilteredSquirrels(squirrels);
        }
    }, [filter, squirrels]);

    // Effect to update filtered search squirrels when search query changes
    useEffect(() => {
        if (searchQuery) {
            const filteredSearch = filteredSquirrels.filter(squirrel => {
                const squirrelName = generateNameFromID(squirrel.unique_squirrel_id);
                return (
                    squirrelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    squirrel.unique_squirrel_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    squirrel.hectare.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });
            setFilteredSearchSquirrels(filteredSearch);
        } else {
            // If no search query, set filtered search squirrels to the same as filtered squirrels
            setFilteredSearchSquirrels(filteredSquirrels);
        }
    }, [searchQuery, filteredSquirrels]);

    // Navigate to Specific squirrel using id when clicked
    const handleClick = (id) => {
        navigate(`/squirrels/${id}`);
    };

    return (
        <div className="container mx-auto px-20 p-10">
            <div className="flex items-center justify-center">
                {/* SearchBar */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, ID, or hectare..."
                    className=" mt-4 mb-10 p-2 border border-black rounded-lg mr-4 w-full"
                />
                {/* DropDown */}
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="mt-4 mb-10 p-2 border border-black rounded-lg ">
                    <option value="">Select Location</option>
                    <option value="SouthEast">SouthEast</option>
                    <option value="CenterEast">CenterEast</option>
                    <option value="NorthEast">NorthEast</option>
                    <option value="SouthCenter">SouthCenter</option>
                    <option value="Center">Center</option>
                    <option value="NorthCenter">NorthCenter</option>
                    <option value="SouthWest">SouthWest</option>
                    <option value="CenterWest">CenterWest</option>
                    <option value="NorthWest">NorthWest</option>
                </select>
            </div>
            {/* FilterdSquirrels */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSearchSquirrels &&
                    filteredSearchSquirrels
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
