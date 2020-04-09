/*
 * Created on Mon Aug 05 2019
 *
 * Copyright (c) 2019 Orange Business Services
 */


import React from 'react';
import { Route, Switch, withRouter,BrowserRouter} from 'react-router-dom';
import Main from './Containers/Main';
import LoginUI from './Containers/LoginUI';
import DashBoardRoute from './DashBoardRoute';
import SmsCard from './Components/SmsProject/SmsCard';

export default function Routes() {

  return(
      <Switch>
        <Route path='/' exact component={withRouter(LoginUI)} />
        <DashBoardRoute path='/verifyproject' exact component={withRouter(Main)} />
      </Switch>
);
}