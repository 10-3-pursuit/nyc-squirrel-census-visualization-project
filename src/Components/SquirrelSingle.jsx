import React from 'react';

function SquirrelSingle({ squirrel }) {
    // Format the date from "10142018" to "May 3, 2018"
    const formatDate = (date) => {
        const month = parseInt(date.substring(0, 2), 10);
        const day = parseInt(date.substring(2, 4), 10);
        const year = date.substring(4);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${months[month - 1]} ${day}, ${year}`;
    };



    
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                {/* <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48 max-h-36" src={imageUrl} alt="" />
                </div> */}
                <div className="p-8">
                    <p className="text-gray-800 font-bold">Unique Squirrel ID: {squirrel.unique_squirrel_id}</p>
                    <p className="text-gray-600">Date: {formatDate(squirrel.date)}</p>
                    {/* Add more squirrel data here */}
                </div>
            </div>
        </div>
    );
}

export default SquirrelSingle;
