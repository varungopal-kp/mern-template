/**
 *
 * ToursPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import makeSelectTours from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ToursPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>ToursPage</title>
          <meta name="description" content="Description of ToursPage" />
        </Helmet>
      </div>
    );
  }
}

ToursPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tours: makeSelectTours(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withReducer = injectReducer({ key: 'toursPage', reducer });
const withSaga = injectSaga({ key: 'toursPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ToursPage);
