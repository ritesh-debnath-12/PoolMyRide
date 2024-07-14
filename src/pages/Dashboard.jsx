import Sidebar from "../Components/Dashboard/Sidebar";
import Riders_served from "../Components/Dashboard/Riders_served";
import Riders_travelled from "../Components/Dashboard/Routes_travelled";
import Frequently_Travelled from "../Components/Dashboard/Frequently_Travelled";
import Recent_Riders from "../Components/Dashboard/Recent_Riders";
function Dashboard() {
    return (
        <>
            <title>Dashboard</title>
            <div className="flex xl:h-screen">
                <Sidebar />
                <div className="flex-1 pt-8 mx-6">
                    <section className="xl:grid xl:grid-cols-2 gap-6 mb-6 mt-20 max-sm:flex max-sm:gap-10">
                        <Riders_served />
                        <Riders_travelled />
                    </section>
                    <Frequently_Travelled/>
                    <Recent_Riders/>
                </div>
            </div>

        </>
    );
}

export default Dashboard;