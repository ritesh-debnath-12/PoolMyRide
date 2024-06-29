function DriverReg(){
    return (

<div className="flex items-center justify-center min-h-screen bg-background">
  <div className=" flex items-center justify-center min-h-screen bg-background">
    <div
      className="rounded-lg bg-card text-card-foreground shadow-sm w-full max-w-md p-6 sm:p-8"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Driver Registration</h3>
        <p className="text-sm text-muted-foreground">
          Please provide the following information to register as a driver.
        </p>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="experience"
          >
            Driving Experience
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            id="experience"
            placeholder="Enter your driving experience (in years)"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="license"
          >
            Driver's License Proof
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            type="file"
            id="license"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="vehicle-type"
            >
              Vehicle Type
            </label>
            <select
              type="select"
              role="combobox"
              aria-controls="radix-:R2bmn9nltf9f:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              data-placeholder=""
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span style={{pointerEvents: "none"}}>Vehicle type</span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg> */}
              <option value="2-wheeler">2-wheeler</option>
              <option value="3-wheeler">3-wheeler</option>
              <option value="4-wheeler">4-wheeler</option>
            </select>

          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="vehicle-number"
            >
              Vehicle Number
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="vehicle-number"
              placeholder="Enter your vehicle number"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="seats"
          >
            Number of Seats
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            id="seats"
            placeholder="Enter the number of seats"
          />
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default DriverReg