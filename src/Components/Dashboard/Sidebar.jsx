function Sidebar() {
    return (
            <div className="w-64 bg-white text-black p-6 h-4/6 mt-28 ml-5 rounded-xl pb-9 max-sm:hidden">
                <ul className="space-y-4 text-lg font-normal">
                    <p className="flex item-center ml-4 font-semibold text-2xl">Features</p><hr></hr>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-black hover:text-white hover:shadow-[15px_15px_0px_-7px_#718096]">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-black hover:text-white hover:shadow-[15px_15px_0px_-7px_#718096]">Analytics</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-black hover:text-white hover:shadow-[15px_15px_0px_-7px_#718096]">Payments</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-black hover:text-white hover:shadow-[15px_15px_0px_-7px_#718096]">Vehicles</a>
                    </li><hr></hr>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-black hover:text-white hover:shadow-[15px_15px_0px_-7px_#718096]">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-black hover:text-white hover:shadow-[15px_15px_0px_-7px_#718096]">Contact Us</a>
                    </li>
                </ul>
            </div>
    )
}

export default Sidebar;