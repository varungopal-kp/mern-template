import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Orders from './Orders';
import reducer from './reducer';
import saga from './saga';
import makeSelectContactPage from './selectors';


export  class HomePage extends Component {
  state = {};

  componentDidMount() {
    this.props.setTitle('Dashboard');
  }

  render() {
    return (
      <Grid container spacing={3}>        
        <Grid item xs={12}>
          <Paper className="paper2">
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
HomePage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectContactPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
