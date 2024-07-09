import React, { useState } from 'react';

function Driver_Card({ onSubmit }) {
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [seats, setSeats] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(startLocation, endLocation);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start gap-8 mt-14 xl:pl-14">
            <input 
                type="text" 
                className="text-gray-800 w-80 p-3 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" 
                placeholder="Starting Route" 
                value={startLocation} 
                onChange={(e) => setStartLocation(e.target.value)}
            />
            <input 
                type="text" 
                className="text-gray-800 w-80 p-3 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" 
                placeholder="Enter Destination" 
                value={endLocation} 
                onChange={(e) => setEndLocation(e.target.value)}
            />
            <input 
                type="number" 
                className="text-gray-800 w-80 p-3 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" 
                placeholder="Seats Available" 
                value={seats} 
                onChange={(e) => setSeats(e.target.value)}
            />
            <button className="bg-sky-400 w-52 text-white p-3 rounded-full mb-2 hover:bg-sky-500 text-xl font-semibold ml-14" type="submit">
                Submit
            </button>
        </form>
    );
}

export default Driver_Card;
