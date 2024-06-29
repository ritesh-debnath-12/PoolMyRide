import DriverReg from "./DriverReg";
import { useState } from "react";

function SignUpCard() {

  const [isDriver, setIsDriver] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsDriver(event.target.checked);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background mt-14">
      <title>SignUp</title>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md p-6 sm:p-8" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Rider Registration</h3>
          <p className="text-sm text-muted-foreground">Please provide the following information to register as a rider.</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="full-name"
              >
                Full Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="full-name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="age"
              >
                Age
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="age"
                placeholder="Enter your age"
                type="number"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="password"
            >
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
              id="password"
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              role="checkbox"
              aria-checked="false"
              checked={isDriver}
              value="on"
              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              id="is-driver"
              onChange={handleCheckboxChange}
            ></input>
            <label
              className="text-sm font-medium leading-none"
              for="is-driver"
            >
              Are you a driver as well?
            </label>
          </div>
        </div>
      {isDriver? <DriverReg /> : null}
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            type="submit"
          >
            Register
          </button>
      </div>
    </div>
      
  );
}

export default SignUpCard;