import { GoogleLogin } from "react-google-login";

const clientID = "544771400207-9lnor2r261j8ei10r2e0bv0pgtm8t92o.apps.googleusercontent.com"


function Login() {

    const onSuccess = (res) =>{
        
        console.log("THE WHOLE RESPONSE SEEEE", res)
    }

    const onFailure = (res) =>{
        console.log("Login Failed! res: ", res)
    }

    return(
        <div id="siginButton" className="max-sm:w-48">
            <GoogleLogin
                clientId={clientID}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn= {true}
            />

        </div>
    )
}

export default Login;