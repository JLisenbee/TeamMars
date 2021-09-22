import React from 'react'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import variable from '../variable'

const Login = () => {
  
  // if google login was a success 
  const onSuccess = async (response) => {
    // send the response data to our backend
    axios({
      method: "POST",
      url: variable.SERVER_LOGIN_URL,
      data: {tokenId: response.tokenId}
    }).then((res) => {
      console.log(res)
    })
  }

  // if the google login was a failure
  const onFailure = (response) => {
    console.log(response)
  }

  // body of our login page
  return(
    <>
      <GoogleLogin
        clientId={variable.GOOGLE_CLIENT_ID}
        buttonText="Login with umbcID"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </>
  )
}

export default Login;