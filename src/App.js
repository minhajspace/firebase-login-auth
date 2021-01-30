import React from 'react'
import Home from './component/Home'
import SignIn from './component/SignIn'
import CreateAccount from './component/CreateAccount'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={CreateAccount} />
      <Route exact path="/home" component={Home} />
    </Switch>

  )
}

export default App
