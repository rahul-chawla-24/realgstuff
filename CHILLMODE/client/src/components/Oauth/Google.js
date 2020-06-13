import React,{ Component } from "react";
import GoogleLogin from "react-google-login";
import '../Home/my.css'

class Google extends Component{

    responseGoogle = (res) =>{
        console.log(res);
        
    }

    render(){
        return(
            <div className="googleLogin">
             <GoogleLogin
                clientId="692028292367-0ohkuos4qhds05g0jols3660i1vtoqun.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                    />
            </div>
        )
    }
}


export default Google;