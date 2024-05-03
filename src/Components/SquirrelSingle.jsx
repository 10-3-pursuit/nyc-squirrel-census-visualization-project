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

    function generateNameFromID(unique_squirrel_id) {
        const prefix = unique_squirrel_id.slice(0, 2);
        
        // Define mappings from prefixes to names
        const prefixToName = {
            '37': 'Fluffy',
            '21': 'Sandy',
            '11': 'Rocky',
            '32': 'Cocoa',
            '13': 'Whiskers',
            '22': 'Buddy',
            '36': 'Fuzzy',
            '20': 'Stripey',
            '05': 'Patch',
            '17': 'Nibbles',
            '07': 'Chubby',
            '12': 'Chestnut',
            '06': 'Rusty',
            '16': 'Smokey',
            '33': 'Charlie',
            '23': 'Scooter',
            '15': 'Dusty',
            '35': 'Felix',
            '24': 'Oliver',
            '14': 'Mittens',
            '27': 'Lucky',
            '25': 'Max',
            '30': 'Tiger',
            '10': 'Buster',
            '26': 'Simba',
            '34': 'Shadow',
            '31': 'Leo',
            '28': 'Oreo',
            '29': 'Milo'
        };
        
        // Check if the prefix exists in the mapping
        if (prefix in prefixToName) {
            return prefixToName[prefix];
        } else {
            // Return default name if no mapping is found
            return 'Alex';
        }
    }

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
                    <p className="text-gray-600">Date: {formatDate(squirrel.date)}</p>
                    {/* Add more squirrel data here */}
                </div>
            </div>
        </div>
    );
}

export default SquirrelSingle;
