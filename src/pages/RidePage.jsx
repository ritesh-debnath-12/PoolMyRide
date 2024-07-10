import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import RidePageCard from "../Components/RidePageCard/RidePageCard";
import Map from "../Components/Map/Map"

function RidePage() {
    return (
        <div>
            <title>Ride with us</title>
            {/*<Navbar></Navbar>*/}
            <RidePageCard></RidePageCard>
            <p className="text-6xl text-center max-sm:text-4xl max-sm:mb-40 mb-20">Click on a pin to check for its route</p>
            <Map></Map>
            {/*<Footer></Footer>*/}
        </div>
    );
}

export default RidePage