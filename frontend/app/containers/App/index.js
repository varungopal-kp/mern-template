/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App() {
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - React Template" defaultTitle="React Template">
        <meta name="description" content="A React Template application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}
