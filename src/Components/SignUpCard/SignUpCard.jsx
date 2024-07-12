import DriverReg from "./DriverReg";
import { useState } from "react";

function SignUpCard() {
  const [isDriver, setIsDriver] = useState(false);
  const [inputs, setInputs] = useState({});
  const [driverInputs, setDriverInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleDriverChange = (event) => {
    const { name, value } = event.target;
    setDriverInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    setIsDriver(event.target.checked);
  };

  const onRegister = (event) => {
    event.preventDefault();
    const allInputs = { ...inputs, ...driverInputs };
    console.log("Registered");
    console.log(allInputs);

    fetch("http://127.0.0.1:5000/add_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allInputs),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data saved successfully:", data);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div className="flex items-start justify-center xl:min-h-screen bg-background mt-14 mb-14">
      <title>SignUp</title>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md p-6 sm:p-8 max-sm:w-[90vw]">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">
            Rider Registration
          </h3>
          <p className="text-sm text-muted-foreground">
            Please provide the following information to register as a rider.
          </p>
        </div>
        <div className="p-1 space-y-4 max-sm:p-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                name="fullName"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black max-sm:text-sm max-sm:px-2"
                id="full-name"
                placeholder="Enter your full name"
                type="text"
                value={inputs.fullName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="age"
              >
                Age
              </label>
              <input
                name="age"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black max-sm:text-sm max-sm:px-2"
                id="age"
                placeholder="Enter your age"
                type="number"
                value={inputs.age || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black max-sm:text-sm max-sm:px-2"
              id="email"
              placeholder="Enter your email"
              type="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="pass"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black max-sm:text-sm max-sm:px-2"
              id="password"
              placeholder="Enter your password"
              type="password"
              value={inputs.pass || ""}
              onChange={handleChange}
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
            />
            <label
              className="text-sm font-medium leading-none"
              htmlFor="is-driver"
            >
              Are you a driver as well?
            </label>
          </div>
        </div>
        {isDriver && <DriverReg handleDriverChange={handleDriverChange} />}
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline max-sm:mt-10 mt-5"
          type="submit"
          onClick={onRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default SignUpCard;
