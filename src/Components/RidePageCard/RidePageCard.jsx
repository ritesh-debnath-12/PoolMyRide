function RidePageCard() {
  return (
    <div>
      <div className="flex justify-center xl:items-center xl:h-screen max-sm:mt-28 max-sm:mb-20">
        <div className="bg-white shadow-md rounded-lg xl:p-8 flex max-sm:p-4 max-sm:w-[90vw] max-sm:flex-col max-sm:items-center max-sm:gap-5 max-sm:pb-10">
        <div className="p-4 xl:border-r max-sm:border-b border-gray-200 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4 text-black text-center">
              Start your Journey Now
            </h1>
            <p className="text-lg text-black text-center">Request Your Ride!</p>
          </div>
          <div className="w-1/2 p-4 flex flex-col justify-center max-sm:w-[80vw]">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-6 text-center"
                htmlFor="pickup"
              >
                Look for Rides in
              </label>
              <input
                className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-sm:h-14"
                id="pickup"
                type="text"
                placeholder="Enter Pickup Location"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-sm:h-14"
                id="destination"
                type="text"
                placeholder="Enter Destination"
              />
            </div>
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline mt-4 max-sm:h-14"
              type="button"
            >
              Request Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RidePageCard;
