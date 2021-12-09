import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import variable from '../variable'
import Friend from './Friend'

// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const FriendList = () => {

    const [friends, setfriends] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: variable.GET_FRIENDS,
          }).then((res) => {
              console.log(res.data)
              setfriends(res.data)
          })
    }, [])

    return(
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2>Friends Online</h2>
            <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-start'}}>
                {friends.map((data, key) => (
                    <Friend data={data} key={key}/>
                ))}
            </div>
        </div>
    )
  }
  
  export default FriendList