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

    function getImageUrl(primaryFurColor, uniqueSquirrelId) {
        // For Gray color
        if (primaryFurColor === 'Gray') {
            const firstDigit = parseInt(uniqueSquirrelId.charAt(0));
            if (firstDigit >= 0 && firstDigit <= 2) {
                return 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714773302/grey_vtgjjm.jpg'; // grey1
            } else if (firstDigit >= 3 && firstDigit <= 5) {
                return 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714774293/grey2_vh7bql.avif'; // grey2
            } else {
                return 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714774298/grey_3_aqj8xd.jpg'; // grey3
            }
        }
        // For Cinnamon color
        else if (primaryFurColor === 'Cinnamon') {
            return 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714773680/Cinnamon_q18duw.jpg';
        }
        // For Black color
        else if (primaryFurColor === 'Black') {
            return 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714774586/black_fehwcn.webp';
        }
        // For White color
        else if (primaryFurColor === 'White') {
            return 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714773412/white_g9jzcd.jpg';
        }
        // Default case
        else {
            return 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714774776/default_wfpoqu.jpg';
        }
    }
     // Get the image URL for the squirrel
     const imageUrl = getImageUrl(squirrel.primary_fur_color, squirrel.unique_squirrel_id);
    
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48 max-h-36" src={imageUrl} alt="" />
                </div>
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
