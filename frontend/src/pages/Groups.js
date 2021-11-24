import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import FriendList from '../components/FriendList'
import SideBar from '../components/SideBar'
import GroupChat from '../components/GroupChat'
import "../css/groups.css";

const Groups = () => {

  useEffect(() => {
    console.log('groups')
  })

  return(
    <>
      <div>
        <Header />
      </div>
      <div className = "menuContainer">
        <div className = "bodyObject bodyLeftEdge"><FriendList /></div>
        <div className = "bodyObject bodyCenter"><GroupChat /></div>
        <div className = "bodyObject bodyRightEdge"><SideBar /></div>
      </div>
    </>
  )
}

export default Groups;