import {useEffect} from 'react'
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom'
import Header from '../components/Header'

import SideBar from '../components/SideBar'

const Main = () => {
  return(
    <>
      <h1>Main</h1>
    </>
  )
}

const Account = () => {
  return(
    <>
      <h1>Account</h1>
    </>
  )
}
const Security = () => {
  return(
    <>
      <h1>Security</h1>
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
        <div className = "bodyObject bodyLeftEdge">
          <p>USER SETTINGS <br/>
              <Link to={`${url.url}`}>Profile</Link><br/>
              <Link to={`${url.url}/account`}>Account</Link><br/>
              <Link to={`${url.url}/security`}>Security & Privacy</Link>
          </p>
        </div>
        <div className = "bodyObject bodyCenter">
          <Switch>
            <Route exact path={`${url.path}`}><Main/></Route>
            <Route exact path={`${url.path}/account`}><Account/></Route>
            <Route exact path={`${url.path}/security`}><Security/></Route>
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