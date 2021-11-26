import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import FriendList from '../components/FriendList'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

import axios from 'axios'
import variable from '../variable'

const Home = () => {

  const [userName, setuserName] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userPicture, setuserPicture] = useState('')
  const [userId, setuserId] = useState('')

  useEffect(() => {
    // send the response data to our backend
    axios({
      method: "GET",
      withCredentials: true,
      url: variable.GET_USER_DATA,
    }).then((res) => {
      const { email, name, picture, id } = res.data
      setuserEmail(email)
      setuserName(name)
      setuserPicture(picture)
      setuserId(id)
    })
  })

  return(
    <>
      <div>
        <Header userPicture={userPicture}/>
      </div>
      <div className = "menuContainer">
        <div className = "bodyObject bodyLeftEdge"><FriendList /></div>
        <div className = "bodyObject bodyCenter"><Feed /></div>
        <div className = "bodyObject bodyRightEdge"><SideBar /></div>
      </div>
    </>
  )
}

export default Home;