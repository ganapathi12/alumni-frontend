import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Base from './core/Base'
import Home from './core/Home'
import Signup from './user/Signup'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/test' exact component={Base} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
