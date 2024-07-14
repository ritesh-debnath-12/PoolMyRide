function Recent_Riders(){
    return(
        <section className="bg-white rounded-xl text-black p-6 max-sm:w-[90vw]">
                <h2 className="text-xl font-bold mb-4 max-sm:px-4">Recent Riders</h2>
                <table className="xl:w-full text-left max-sm:w-[90vw] max-sm:px-4">
                    <thead>
                        <tr>
                            <th className="py-2 px-4">ID</th>
                            <th className="py-2 px-4">JID</th>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4 max-sm:hidden">Route</th>
                            <th className="py-2 px-4 max-sm:hidden">Pickup</th>
                            <th className="py-2 px-4 max-sm:hidden">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-gray-700 max-sm:border-hidden">
                            <td className="py-2 px-4">72974564</td>
                            <td className="py-2 px-4">A362BX</td>
                            <td className="py-2 px-4">Ritesh Debnath</td>
                            <td className="py-2 px-4 text-blue-500 max-sm:hidden"><a href="#">Click Me!</a></td>
                            <td className="py-2 px-4 max-sm:hidden">21/04/2024 12:30pm</td>
                            <td className="py-2 px-4 text-green-500 max-sm:hidden">Confirm!</td>
                        </tr>
                        <tr className="border-t border-gray-700 max-sm:border-hidden">
                            <td className="py-2 px-4">98216381</td>
                            <td className="py-2 px-4">PX52KL</td>
                            <td className="py-2 px-4">Shubhojit Ghosh</td>
                            <td className="py-2 px-4 text-blue-500 max-sm:hidden"><a href="#">Click Me!</a></td>
                            <td className="py-2 px-4 max-sm:hidden">21/04/2024 5:30am</td>
                            <td className="py-2 px-4 text-green-500 max-sm:hidden">Complete</td>
                        </tr>
                        <tr className="border-t border-gray-700 max-sm:border-hidden">
                            <td className="py-2 px-4">72974564</td>
                            <td className="py-2 px-4">XK768Y</td>
                            <td className="py-2 px-4">Sanjoy Paul</td>
                            <td className="py-2 px-4 text-blue-500 max-sm:hidden"><a href="#">Click Me!</a></td>
                            <td className="py-2 px-4 max-sm:hidden">20/04/2024 8:00pm</td>
                            <td className="py-2 px-4 text-red-500 max-sm:hidden">Abandoned</td>
                        </tr>
                        <tr className="border-t border-gray-700 max-sm:border-hidden">
                            <td className="py-2 px-4">86351865</td>
                            <td className="py-2 px-4">EF11XX</td>
                            <td className="py-2 px-4">Sayan Das</td>
                            <td className="py-2 px-4 text-blue-500 max-sm:hidden"><a href="#">Click Me!</a></td>
                            <td className="py-2 px-4 max-sm:hidden">20/04/2024 4:00pm</td>
                            <td className="py-2 px-4 text-green-500 max-sm:hidden">Complete</td>
                        </tr>
                    </tbody>
                </table>
            </section>
    )
}

export default Recent_Riders;