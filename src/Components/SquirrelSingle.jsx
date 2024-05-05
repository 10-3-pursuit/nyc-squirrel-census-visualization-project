import React from 'react';
import { formatDate, getImageUrl, generateNameFromID } from '../Helpers/SingleSquirrelHelper';
import { getRegion } from '../Helpers/SquirrelIndexHelper';


function SquirrelSingle({ squirrel }) {
    // Format the date from "10142018" to "May 3, 2018 example"


     // Get the image URL for the squirrel
     const imageUrl = getImageUrl(squirrel.primary_fur_color, squirrel.unique_squirrel_id);
     const squirrelName = generateNameFromID(squirrel.unique_squirrel_id);
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl min-h-36">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-32 w-full object-cover md:h-full md:w-48 max-h-36" src={imageUrl} alt="" />
                </div>
                <div className="p-8">
                <p className="text-gray-800 font-bold">Name: {squirrelName}</p>
                    <p className="text-gray-800">ID: {squirrel.unique_squirrel_id}</p>
                    <p className="text-gray-800">Location: {getRegion(squirrel.hectare)} Central Park</p>
                    <p className="text-gray-600">Date: {formatDate(squirrel.date)}</p>
                </div>
            </div>
        </div>
    );
}

export default SquirrelSingle;
