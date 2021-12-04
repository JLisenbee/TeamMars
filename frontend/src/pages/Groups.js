import {useEffect} from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import FriendList from '../components/FriendList'
import SideBar from '../components/SideBar'
import GroupChat from '../components/GroupChat'
import GroupTab from '../components/GroupTab'
import "../css/groups.css";

const Groups = () => {

  let url = useRouteMatch();
  
  const groupArr = [
    {
      title: "Team Mars", 
      address: "team-mars", 
      description: "Here is the meeting place for Team Mars, a group in CMSC 447 and the devs of this beautiful software"
    },
    {
      title: "UMBC MTG", 
      address: "mtg", 
      description: "Unofficial Magic: The Gathering group for UMBC. All players of any experience welcome!"
    },
    {
      title: "CMSC 426 - Fall 2020", 
      address: "426", 
      description: "Study group for Principles of Computer Security (Office hours available M/W 10:00am-11:15am)"
    }
  ];


  useEffect(() => {
    console.log('groups')
  })

  return(
    <>
      <div><Header /></div>
      <div className = "menuContainer">
        <div className = "bodyObject bodyLeftEdge"><FriendList /></div>
        <div className = "bodyObject bodyCenter">
        <Switch>
            <Route exact path={`${url.path}`}>
              <div style = {{width: '100%'}}>
                <h2>Groups</h2>
                <div className = "box chatBox">
                {groupArr.map((item) => (<GroupTab title = {item.title}
                            address = {item.address}
                            description = {item.description} />
                    ))}
                </div>
              </div>
            </Route>
            <Route path={`${url.path}/c/`}>
              <GroupChat />
            </Route>
          </Switch>
        </div>
        <div className = "bodyObject bodyRightEdge"><SideBar /></div>
      </div>
    </>
  )
}

export default Groups;