import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Footer from 'components/Footer';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { login } from './actions';
import Form from './Form';
import reducer from './reducer';
import saga from './saga';
import { makeSelectPageState } from './selectors';

export class SignIn extends React.PureComponent {
  handleSubmit(data) {
    if (data) {
      const formData = data.toJS();
      this.props.login(formData);
    }
  }

  render() {
    const login = localStorage.getItem('_token');
    if (login) {
      window.location.href = '/dashboard';
      return null;     
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper12">
          <Avatar className="avatar2">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form onSubmit={data => this.handleSubmit(data)} />
        </div>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectPageState(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: data => {
      dispatch(login(data));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignIn);
