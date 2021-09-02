import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Base from './core/Base'
import Home from './core/Home'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/test' exact component={Base} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
