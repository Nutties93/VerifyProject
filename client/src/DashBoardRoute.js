/*
 * Created on Mon Aug 05 2019
 *
 * Copyright (c) 2019 Orange Business Services
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route
        render={props =>
          (cookies.get('username') && cookies.get('requestID') && cookies.get('code')) ? <Component {...props} /> : <Redirect to='/' />
        }
        {...rest}
      />
)

export default ProtectedRoute