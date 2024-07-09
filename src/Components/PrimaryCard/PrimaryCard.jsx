

function PrimaryCard(){

    return (
            <div className="bg-white text-black p-6 pt-2 rounded-lg shadow-[5px_5px_rgba(113,_128,_150,_0.4),_10px_10px_rgba(113,_128,_150,_0.3),_15px_15px_rgba(113,_128,_150,_0.2),_20px_20px_rgba(113,_128,_150,_0.1),_25px_25px_rgba(113,_128,_150,_0.05)]
             w-96 max-w-md mb-10 md:mb-0 max-sm:w-[85vw]">
                <div className="flex justify-around mb-4">
                    <button className="focus:outline-none font-semibold p-1 underline-animation flex flex-col items-center"><img src="src/assets/Steering-wheel.svg" alt="Drive" />Drive</button>
                    <button className="focus:outline-none font-semibold p-1 underline-animation flex flex-col items-center"><img src="src/assets/car.svg" alt="car" />Ride</button>
                </div>
                <hr />
                <h2 className="text-3xl font-bold text-center mb-6 pt-3">Request a Ride</h2>
                <form>
                    <div className="mb-10">
                        <input type="text" placeholder= "Pickup Location"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"/>
                    </div>
                    <div className="mb-12">
                        <input type="text" placeholder="Enter Destination"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"/>
                    </div>
                    <button type="submit" className="w-full bg-black text-white p-3 rounded-lg mb-2 hover:bg-gray-900">Request
                        Now</button>
                </form>
            </div>
             
    )
}

export default PrimaryCard;