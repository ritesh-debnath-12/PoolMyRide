function DriverReg({ handleDriverChange }) {
  return (
    <div className="p-1 space-y-4 xl:mb-10 max-sm:p-1">
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="experience"
        >
          Driving Experience
        </label>
        <input
          name="drivingXp"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black max-sm:text-sm max-sm:px-2"
          type="number"
          id="experience"
          placeholder="Enter your driving experience (in years)"
          onChange={handleDriverChange}
        />
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="license"
        >
          Driver's License Number
        </label>
        <input
          name="licenseNumber"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black max-sm:text-sm max-sm:px-2"
          type="text"
          id="license"
          onChange={handleDriverChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="vehicle-type"
          >
            Vehicle Type
          </label>
          <select
            name="vehicleType"
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black max-sm:text-sm max-sm:px-2"
            id="vehicle-type"
            onChange={handleDriverChange}
          >
            <option value="2-wheeler">2-wheeler</option>
            <option value="3-wheeler">3-wheeler</option>
            <option value="4-wheeler">4-wheeler</option>
          </select>
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="vehicle-number"
          >
            Vehicle Number
          </label>
          <input
            name="vehicleNumber"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black max-sm:text-sm max-sm:px-2"
            id="vehicle-number"
            placeholder="Enter your vehicle number"
            type="text"
            onChange={handleDriverChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="seats"
        >
          Number of Seats
        </label>
        <input
          name="seats"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black max-sm:text-sm max-sm:px-2"
          type="number"
          id="seats"
          placeholder="Enter the number of seats"
          onChange={handleDriverChange}
        />
      </div>
    </div>
  );
}

export default DriverReg;
