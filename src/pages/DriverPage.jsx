import React, { useState } from 'react';
import Driver_Card from "../Components/DriverCard/Driver_Card";
import Map from "../Components/Map/Map";

function DriverPage() {
    const [begin, setBegin] = useState([22.8365, 88.6425]); // Default coordinates
    const [dest, setDest] = useState([22.7000, 88.3700]); // Default coordinates

    const handleSubmit = async (startLocation, endLocation) => {
        const startCoords = await getCoordinates(startLocation);
        const endCoords = await getCoordinates(endLocation);

        setBegin(startCoords);
        setDest(endCoords);
    };

    const getCoordinates = async (location) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`);
            const data = await response.json();
            if (data && data.length > 0) {
                return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
            }
        } catch (error) {
            console.error("Error fetching coordinates:", error);
        }
        return [0, 0]; // Default to (0,0) if no data is found
    };

    return (
        <div className='p-14'>
            <title>Drive with us</title>
            <div className="flex justify-center my-2 mt-28 rounded">
                <Map begin={begin} dest={dest} className="!h-1/3"></Map>
            </div>
            <div className="flex items-center justify-around gap-32 max-sm:justify-center">
                <Driver_Card onSubmit={handleSubmit} />
                <div className="flex flex-col max-sm:hidden">
                    <div className="xl:w-96">
                        <a href="#"><img src="./src/assets/WhiteCar.png" alt="" /></a>
                    </div>
                    <p className="text-white text-5xl font-bold xl:mt-5 xl:pl-12">PoolMyRide</p>
                </div>
            </div>
        </div>
    );
}

export default DriverPage;
