function RidePageCard() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded-lg p-8 flex">
          <div className="p-4 border-r border-gray-200 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4 text-black text-center">
              Start your Journey Now
            </h1>
            <p className="text-lg text-black text-center">Request Your Ride!</p>
          </div>
          <div className="w-1/2 p-4 flex flex-col justify-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-6 text-center"
                htmlFor="pickup"
              >
                Look for Rides in
              </label>
              <input
                className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pickup"
                type="text"
                placeholder="Enter Pickup Location"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded-2xl w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="destination"
                type="text"
                placeholder="Enter Destination"
              />
            </div>
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline mt-4"
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
