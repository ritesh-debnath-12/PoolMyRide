import { Link } from "react-router-dom";

function Navbar(){

    return(
        // Navbar links
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-5">
            <div className="text-2xl flex gap-20 font-bold">
                <a href='/'>PoolMyRide</a>
                <div className="list-none flex gap-20 font-normal text-xl">
                    
                    <li className="cursor-pointer relative glowing-underline pb-1">
                        <a href="/drive">Drive</a>    
                    </li>
                    <li className="relative cursor-pointer glowing-underline pb-1">
                        <a href="/ride">Ride</a>
                    </li>
                    <li className="relative cursor-pointer glowing-underline pb-1">
                        <a href="/about">About</a>
                    </li>
                </div>
            </div>

            {/* Login / Signup links*/}
            <div className="flex gap-5 items-center">
                <a href="#"
                    className="mr-4 border-1 rounded-full px-5 py-2 text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">Login</a>
                <a href="#"
                    className="text-black py-2 px-4 text-center whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">Sign
                    up</a>
            </div>
        </div>
    )
}

export default Navbar;