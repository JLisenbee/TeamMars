import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import FriendList from '../components/FriendList'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

const Home = () => {

  useEffect(() => {
    console.log('home')
  })

  return(
    <>
      <div>
        <Header />
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