/**
 *
 * ContactPage
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
import List from './list';
import { getList } from './actions';

export class ContactPage extends React.PureComponent {
  componentDidMount() {
    this.props.setTitle('Contacts');
    this.props.getList();
  }

  render() {
    const { contactPage } = this.props;

    return (
      <div>
        <Helmet>
          <title>ContactPage</title>
          <meta name="description" content="Description of ContactPage" />
        </Helmet>
        <List contactPage={contactPage} />
      </div>
    );
  }
}

ContactPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  contactPage: makeSelectContactPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getList());
    },
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
