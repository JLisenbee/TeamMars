import React, { useEffect } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { useStoreActions } from 'easy-peasy'
import axios from 'axios'
import variable from './variable'

// All Page Imports
import Login from './pages/Login'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Groups from './pages/Groups'
import Notifications from './pages/Notifications'
import Alerts from './pages/Alerts'
import Profile from './pages/Profile'
import Events from './pages/Events'
import FourOhFour from './pages/FourOhFour'

const App = () => {

  let history = useHistory()
  let location = useLocation()

  const setuserName = useStoreActions((actions) => actions.setuserName)
  const setuserEmail = useStoreActions((actions) => actions.setuserEmail)
  const setuserPicture = useStoreActions((actions) => actions.setuserPicture)
  const setuserId = useStoreActions((actions) => actions.setuserId)

  useEffect(() => {
    // login route
    // if the user is on the login page
    if(location.pathname === '/login') {
      axios({
        method: "GET",
        withCredentials: true,
        url: variable.SERVER_TOKEN_CHECK,
      }).then((res) => {
        // user is already logged in, push to /home
        console.log(res)
        history.push('/home')
      })
      .catch((error) => {
        // if no permission
        // user is not logged in, push to login page
        if (error.response.status === 403) {
          history.push('/login')
        }
      })
    }

    // private route
    // add all public routes here
    else if(location.pathname !== '/privacy' && location.pathname !== '/tos' ) {
      // send token to the server
      axios({
        method: "GET",
        withCredentials: true,
        url: variable.SERVER_TOKEN_CHECK,
      }).then((res) => {
        // get user data
        // send the response data to our backend
        axios({
          method: "GET",
          withCredentials: true,
          url: variable.GET_USER_DATA,
        }).then((res) => {
          const { email, name, picture, _id } = res.data
          // update store data
          setuserEmail(email)
          setuserName(name)
          setuserPicture(picture)
          setuserId(_id)
        })
      })
      .catch((error) => {
        // if no permission
        // user is not logged in, send back to login page
        if (error.response.status === 403) {
          history.push('/login')
        }
      })
    }
  }, [location.pathname])


  return(
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/privacy' component={Privacy}/>
      <Route exact path='/tos' component={Terms}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/' component={Home}/>
      <Route path='/groups' component={Groups}/>
      <Route exact path='/notifications' component={Notifications}/>
      <Route exact path='/alerts' component={Alerts}/>
      <Route path='/profile' component={Profile}/>
      <Route exact path='/events' component={Events}/>
      <Route exact path='*' component={FourOhFour}/>
    </Switch>
  )
}

export default App;
