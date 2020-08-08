import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from 'components/Layouts/default';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      true ? (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
export default PrivateRoute;
