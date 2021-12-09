import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Base from './core/Base'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes'
import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'
import U_gallery from './core/U_gallery/Gallery';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/test' exact component={Base} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/signin' exact component={Signin} />
          <Route path='/user/University_gallery' exact component={U_gallery}/>
          <Route path='/University_gallery' exact component={U_gallery}/>
          <PrivateRoute
            path='/user/dashboard'
            exact
            component={UserDashBoard}
          />
          {/* <PrivateRoute
            path='/user/University_gallery'
            exact
            component={U_gallery}
          /> */}
          <AdminRoute
            path='/admin/dashboard'
            exact
            component={AdminDashBoard}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
