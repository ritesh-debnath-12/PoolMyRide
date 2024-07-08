
import PrimaryCard from "../Components/PrimaryCard/PrimaryCard";

function HomePage(){
    return(
        <>
            <title>PoolMyRide</title>
            <div className="xl:h-screen flex xl:gap-x-80 flex-row items-center justify-center max-sm:gap-20 max-sm:w-screen max-sm:flex-col-reverse max-sm:justify-end max-sm:mt-20">
                <PrimaryCard/>
                <div className="text-center">
                    <h2 className="text-6xl leading-snug font-bold max-sm:text-4xl">Pooling Made Easy</h2>
                    <h2 className="text-6xl leading-snug font-bold max-sm:text-4xl">And</h2>
                    <h2 className="text-6xl leading-snug font-bold max-sm:text-4xl">Affordable</h2>
                </div>
            </div>
    
        </>
    );
}

export default HomePage;
