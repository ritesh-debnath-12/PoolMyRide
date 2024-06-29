function Recent_Riders(){
    return(
        <section className="bg-white rounded-xl text-black p-6">
                <h2 className="text-xl font-bold mb-4">Recent Riders</h2>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="py-2 px-4">ID</th>
                            <th className="py-2 px-4">JID</th>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Route</th>
                            <th className="py-2 px-4">Pickup</th>
                            <th className="py-2 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-gray-700">
                            <td className="py-2 px-4">72974564</td>
                            <td className="py-2 px-4">A362BX</td>
                            <td className="py-2 px-4">Ritesh Debnath</td>
                            <td className="py-2 px-4 text-blue-500"><a href="#">Click Me!</a></td>
                            <td className="py-2 px-4">21/04/2024 12:30pm</td>
                            <td className="py-2 px-4 text-green-500">Confirm!</td>
                        </tr>
                        <tr className="border-t border-gray-700">
                            <td className="py-2 px-4">98216381</td>
                            <td className="py-2 px-4">PX52KL</td>
                            <td className="py-2 px-4">Shubhojit Ghosh</td>
                            <td className="py-2 px-4 text-blue-500"><a href="#">Click Me!</a></td>
                            <td className="py-2 px-4">21/04/2024 5:30am</td>
                            <td className="py-2 px-4 text-green-500">Complete</td>
                        </tr>
                        <tr className="border-t border-gray-700">
                            <td className="py-2 px-4">72974564</td>
                            <td className="py-2 px-4">XK768Y</td>
                            <td className="py-2 px-4">Sanjoy Paul</td>
                            <td className="py-2 px-4 text-blue-500"><a href="#">Click Me!</a></td>
                            <td className="py-2 px-4">20/04/2024 8:00pm</td>
                            <td className="py-2 px-4 text-red-500">Abandoned</td>
                        </tr>
                        <tr className="border-t border-gray-700">
                            <td className="py-2 px-4">86351865</td>
                            <td className="py-2 px-4">EF11XX</td>
                            <td className="py-2 px-4">Sayan Das</td>
                            <td className="py-2 px-4 text-blue-500"><a href="#">Click Me!</a></td>
                            <td className="py-2 px-4">20/04/2024 4:00pm</td>
                            <td className="py-2 px-4 text-green-500">Complete</td>
                        </tr>
                    </tbody>
                </table>
            </section>
    )
}

export default Recent_Riders;