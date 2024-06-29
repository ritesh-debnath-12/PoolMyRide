import Driver_Card from "../Components/DriverCard/Driver_Card";
function DriverPage() {
    return (
        <>
        <title>Drive with us</title>
            <div className="flex justify-center my-2 mt-28 rounded">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.746095513458!2d88.44517707516258!3d22.959576179217912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027730302f6e25%3A0xe50dfccae21e1fc!2sJIS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1719417629591!5m2!1sen!2sin" width="1500" height="500" className="border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="flex items-center justify-around gap-32">
                <Driver_Card/>
                <div className="flex flex-col justify-center">
                    <div className="w-96"><a href="#"><img src="./src/assets/WhiteCar.png" alt="" /></a></div>
                    <p className="text-white text-5xl font-bold mt-5 pl-12">PoolMyRide</p>
                </div>
            </div>
        </>
    )
}

export default DriverPage;