/**
 *
 * Tours
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
import makeSelectContactPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ContactPage extends React.PureComponent {

  render() {
    return (
      <div>
        <Helmet>
          <title>ContactPage</title>
          <meta name="description" content="Description of ContactPage" />
        </Helmet>
      </div>
    );
  }
}

ContactPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tours: makeSelectContactPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withReducer = injectReducer({ key: 'contactPage', reducer });
const withSaga = injectSaga({ key: 'contactPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactPage);
