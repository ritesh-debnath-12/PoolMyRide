
import PrimaryCard from "../Components/PrimaryCard/PrimaryCard";

function HomePage(){
    return(
        <>
            <div className="h-screen flex gap-x-80 flex-row items-center justify-center">
                <PrimaryCard/>
                <div className="text-center">
                    <h2 className="text-6xl leading-snug font-bold">Pooling Made Easy</h2>
                    <h2 className="text-6xl leading-snug font-bold">And</h2>
                    <h2 className="text-6xl leading-snug font-bold">Affordable</h2>
                </div>
            </div>
    
        </>
    );
}

export default HomePage;