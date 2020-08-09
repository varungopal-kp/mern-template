import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from 'components/Layouts/default';

const token = localStorage.getItem('_token');

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token ? (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      ) : (
        <Redirect
          to={{ pathname: '/', state: { from: props.location } }}
        />
      )
    }
  />
);
export default PrivateRoute;
