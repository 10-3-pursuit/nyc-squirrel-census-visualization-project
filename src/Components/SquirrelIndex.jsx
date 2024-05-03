import React, { useEffect, useState } from 'react';
import SquirrelSingle from './SquirrelSingle';

const SQUIRREL_API = import.meta.env.VITE_SQUIRREL_BASE_URL;
// const TOKEN = 'eZIzdsDMgsnkjT1pzulLjDoSY'; 
const VITE_SQUIRREL_TOCKEN = import.meta.env.VITE_SQUIRREL_TOCKEN;

function SquirrelIndex() {
    const [squirrels, setSquirrels] = useState([]);

    useEffect(() => {
        const fetchSquirrels = async () => {
            try {
                const response = await fetch(`${SQUIRREL_API}?$$app_token=${VITE_SQUIRREL_TOCKEN}`);
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

    return (
        <div className="container mx-auto px-20 p-10">

        </div>
    );
}

export default SquirrelIndex;
