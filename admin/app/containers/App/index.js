/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import LoginPage from 'containers/Auth/Login';
import Logout from 'containers/Auth/Logout';
import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'helpers/privateRoute';

export default function App() {


  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage}  />
          
          <PrivateRoute exact path="/dashboard" component={HomePage} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <Route path="" component={NotFoundPage}  />
        </Switch>
      </div>
    </React.Fragment>
  );
}
