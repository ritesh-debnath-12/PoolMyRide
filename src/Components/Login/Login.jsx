import { GoogleLogin } from "react-google-login";

const clientID = "544771400207-9lnor2r261j8ei10r2e0bv0pgtm8t92o.apps.googleusercontent.com"


function name(params) {
    return{
        <div id="siginButton">
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn= {true}

            />
            
        </div>
    }
}