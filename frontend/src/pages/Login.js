import React from 'react'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import variable from '../variable'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { ReactComponent as GoogleG } from '../logos/google.svg';
import "../css/login.css";

const Login = () => {
  let history = useHistory()
  
  // if google login was a success 
  const onSuccess = async (response) => {
    // send the response data to our backend
    axios({
      method: "POST",
      withCredentials: true,
      url: variable.SERVER_LOGIN_URL,
      data: {tokenId: response.tokenId}
    }).then((res) => {
      console.log(res)
      history.push('/home')
    })
    .catch((error) => {
      if (error.status === 400) {
        // Handle 400
        console.log(error.message)
      }
    })
  }

  // if the google login was a failure
  const onFailure = (response) => {
    console.log(response)
  }

  // body of our login page
  return(
      <div className = "flexContainer">
        <div className= "upperContent">
          <div className = "loginBox">
            <h1>Welcome</h1>
            <p>
                <span>By logging in you accept our </span>
                <Link className = "goldLink" to="/privacy">Privacy Policy</Link> 
                <span> and </span>
                <Link className = "goldLink" to="/tos">Terms of Service</Link>
            </p>
            <div className = "flexContainer">
              <GoogleLogin
              clientId={variable.GOOGLE_CLIENT_ID}
              render={renderProps => (
              <button className = "button"
                      onClick={renderProps.onClick} 
                      disabled={renderProps.disabled}>
                        <GoogleG />
                        Login with UMBC email
                        </button>
                                      )}
              buttonText="Log in with UMBC email"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default Login;