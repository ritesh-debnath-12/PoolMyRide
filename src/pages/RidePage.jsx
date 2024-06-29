import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import RidePageCard from "../Components/RidePageCard/RidePageCard";
import Map from "../Components/Map/Map"

function RidePage() {
    return (
        <div>
            <Navbar></Navbar>
            <RidePageCard></RidePageCard>
            <p className="text-6xl">Click on a pin to check for its route</p>
            <Map></Map>
            <Footer></Footer>
        </div>
    );
}