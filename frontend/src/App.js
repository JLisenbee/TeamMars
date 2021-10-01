import React from 'react'
import { Switch, Route } from 'react-router-dom'

// All Page Imports
import Login from './pages/Login'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const App = () => {
  return(
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/privacy' component={Privacy}/>
      <Route exact path='/tos' component={Terms}/>
      <Route exact path='/' component={Home}/>
    </Switch>
  )
}

export default App;
