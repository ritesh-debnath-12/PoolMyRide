import Login from "../Components/Login/Login";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";


const clientID = "544771400207-9lnor2r261j8ei10r2e0bv0pgtm8t92o.apps.googleusercontent.com"

function LoginPage(){

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    console.log(inputs)
  };

  const onValidation = (event) =>{
//     @app.route('/validate_user', methods=['POST'])
//     def validate_user(email, password):
  //     user_ref = db.collection('users').document(email)
  //     user = user_ref.get()
  //     if user.exists:
  //         user_data = user.to_dict()
  //         if user_data['pass'] == password:
  //             return True
  //     return False
   
  } 

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientID,
        scope:""
      })
    };

    gapi.load('client:auth2', start)
  });

    return(
            <div className="xl:min-h-screen max-sm:h-[70vh] flex items-center justify-center max-sm:mt-12">
              <title>Login</title>
              <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 max-sm:w-[90vw]">
                <div className="flex justify-center mb-4">
                  <img src="/src/assets/logo.png" alt="PoolMyRide Logo" className="w-24 h-16"/>
                </div>
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
                  PoolMyRide
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={inputs.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="password"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={inputs.pass || ""}
                      onChange={handleChange}

                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">or continue with</span>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center items-center gap-5 max-sm:gap-0">
                    <div>
                      <Login
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-red-600 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 rounded shadow-sm bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-md:w-48 max-sm:h-[43px] shadow-gray-500 items-center h-[42px]"
                        onClick={onValidation}
                      >
                        Login with Facebook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default LoginPage;