import {useEffect} from 'react'
import { useRouteMatch, Switch, Route, Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import "../css/profile.css";

// Backend: connent to user's display name and username
var displayNameVar = "Dwight K. Schrute";
var usernameVar = "DSchrute";

const Main = () => {

  return(
    <>
      <div className = "box">
        <h1>Public Profile</h1>
        <div>
          <p className = "grayText">Display Name</p>
          <input type="settingText" id = "displayName" defaultValue = {displayNameVar} maxLength = "50"/>
        </div>
        
        <div>
          <p className = "grayText">Username</p>
          <input type="settingText" id = "username" defaultValue = {usernameVar} maxLength = "50"/>
        </div>
      </div>
    </>
  )
}

const Account = () => {
  return(
    <>
      <div className = "box">
        <h1>Account</h1>
      </div>
    </>
  )
}

const Security = () => {
  return(
    <>
      <div className = "box">
        <h1>Security</h1>
      </div>
    </>
  )
}

const NotificationSettings = () => {
  return(
    <>
      <div className = "box">
        <h1>Notifications</h1>
      </div>
    </>
  )
}

const Content = () => {
  return(
    <>
      <div className = "box">
        <h1>Content</h1>
      </div>
    </>
  )
}

const Profile = () => {

  let url = useRouteMatch();

  useEffect(() => {
    console.log('profile')
  })

  return(
    <>
      <div>
        <Header />
      </div>
      <div className = "menuContainer">
        <div className = "bodyObject bodyLeftEdge column">
          <div className = "settingHeader">USER SETTINGS</div>

          <NavLink className = "settingButton" activeClassName = "selected" exact to={`${url.url}`}>
            <div>
              Profile
            </div>
          </NavLink>

          <NavLink className = "settingButton" activeClassName = "selected" to={`${url.url}/account`}>
            <div>
              Account
            </div>
          </NavLink>

          <NavLink className = "settingButton" activeClassName = "selected" to={`${url.url}/security`}>
            <div>
              Security & Privacy
            </div>
          </NavLink>

          <div className = "settingHeader">APP SETTINGS</div>

          <NavLink className = "settingButton" activeClassName = "selected" to={`${url.url}/notifications`}>
            <div>
              Notifications
            </div>
          </NavLink>

          <NavLink className = "settingButton" activeClassName = "selected" to={`${url.url}/content`}>
            <div>
              Content
            </div>
          </NavLink>
        </div>

        <div className = "bodyObject bodyCenter">
          <Switch>
            <Route exact path={`${url.path}`}><Main/></Route>
            <Route exact path={`${url.path}/account`}><Account/></Route>
            <Route exact path={`${url.path}/security`}><Security/></Route>
            <Route exact path={`${url.path}/notifications`}><NotificationSettings/></Route>
            <Route exact path={`${url.path}/content`}><Content/></Route>
            <Route exact path={`${url.path}/*`}>
              <h1>Error - Section Not Found</h1>
            </Route>
          </Switch>
        </div>
        <div className = "bodyObject bodyRightEdge"><SideBar /></div>
      </div>
    </>
  )
}
export default Profile;