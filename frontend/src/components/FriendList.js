import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import variable from '../variable'
import Friend from './Friend'

// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const FriendList = () => {

    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: variable.SERVER_TOKEN_CHECK,
          }).then((res) => {
          })
          .catch((error) => {
          })
    }, [])

    return(
        <div style={{ background: 'red', display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2>Friends Online</h2>
            <div style={{ background: 'blue', display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start'}}>
                <Friend/>
            </div>
        </div>
    )
  }
  
  export default FriendList