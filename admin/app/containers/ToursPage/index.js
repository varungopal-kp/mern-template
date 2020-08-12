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
import List from './list';
import { getList } from './actions';

export class ToursPage extends React.PureComponent {
  componentDidMount() {
    this.props.setTitle('Tours');
    this.props.getList();
  }

  render() {
    const { toursPage } = this.props;

    return (
      <div>
        <Helmet>
          <title>ToursPage</title>
          <meta name="description" content="Description of ToursPage" />
        </Helmet>
        <List toursPage={toursPage} />
      </div>
    );
  }
}

ToursPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  toursPage: makeSelectTours(),
});

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getList());
    },
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
