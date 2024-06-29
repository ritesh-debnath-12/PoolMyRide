function Driver_Card(){
    return(
        <div className="flex flex-col items-start gap-8 mt-14 pl-14">
        <input type="text" className="text-gray-800 w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Starting Route"></input>
        <input type="text" className="text-gray-800 w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Enter Destination"></input>
        <input type="number" className="text-gray-800 w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Seats Available"></input>
        <button className="w-1/6 bg-sky-400 text-white p-3 rounded-full mb-2 hover:bg-sky-500 text-xl font-semibold ml-14">Submit</button>
    </div>
    )
}
export default Driver_Card;