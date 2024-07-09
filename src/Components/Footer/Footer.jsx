function Footer() {
    return (
        <div className="max-sm:mt-20">
            <div className=" bg-[#FBFCF5] text-black flex justify-around py-10">
                <div className="flex flex-col justify-center max-sm:hidden">
                    <div><a href="#"><img src="./src/assets/CAR.png" alt="" /></a></div>
                    <p className="text-black text-5xl font-bold mt-5 pl-8">PoolMyRide</p>
                </div>
                <div className="flex gap-48 font-fontMont max-sm:gap-10">
                    <div className="flex flex-col justify-center items-center gap-10 max-sm:gap-5">
                        <h3 className="font-bold text-2xl max-sm:text-xl">Community</h3>
                        <ul className=" flex flex-col gap-10 text-base max-sm:gap-4 max-sm:text-sm">
                            <li><a href="#">Contributors</a></li>
                            <li><a href="#">The Portal</a></li>
                            <li><a href="#">Live Events</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-10 max-sm:gap-5">
                        <h3 className="font-bold text-2xl max-sm:text-xl">Company</h3>
                        <ul className="flex flex-col gap-10 text-base max-sm:gap-4 max-sm:text-sm">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">History</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-10 max-sm:gap-5">
                        <h3 className="font-bold text-2xl max-sm:text-xl">Socials</h3>
                        <ul className="flex flex-col gap-10 text-base max-sm:gap-4 max-sm:text-sm">
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#E9ECDB] text-black font-fontMont text-sm py-7 flex justify-around max-sm:flex-col max-sm:items-center  max-sm:py-3">
                <p>Copyright © Men of Culture 2024-2027</p>
                <p>Made with ❤️ on Github</p>
            </div>
        </div>
    )
}
export default Footer;