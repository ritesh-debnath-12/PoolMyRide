// // Map.js
// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import L from 'leaflet';
// import 'leaflet-routing-machine';

// const Map = ({begin = [22.5726, 88.3639], dest = [22.7000, 88.3700]}) => {
//   const position1 = begin; // Kolkata
//   const position2 = dest; // Example destination

//   useEffect(() => {
//     const map = L.map('map', {
//       center: position1,
//       zoom: 10,
//     });

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     L.Routing.control({
//       waypoints: [
//         L.latLng(position1),
//         L.latLng(position2),
//       ],
//       routeWhileDragging: true,
//     }).addTo(map);

//     return () => {
//       map.remove();
//     };
//   }, []);

//   return <div className='flex justify-center items-center w-dvw'><div id="map" className="h-screen w-9/12"></div></div>;
// };

// export default Map;
import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const Map = ({ begin, dest }) => {
    useEffect(() => {
        const map = L.map('map', {
            center: begin,
            zoom: 10,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.Routing.control({
            waypoints: [
                L.latLng(begin),
                L.latLng(dest),
            ],
            routeWhileDragging: true,
        }).addTo(map);

        return () => {
            map.remove();
        };
    }, [begin, dest]);

    return (
        <div className='flex justify-center items-center w-dvw'>
            <div id="map" className="xl:h-screen max-sm:h-[60vh] max-sm:w-[80vw] w-9/12 max-sm:-mt-20 max-sm:rounded-xl rounded-xl xl:mb-20"></div>
        </div>
    );
};

export default Map;
