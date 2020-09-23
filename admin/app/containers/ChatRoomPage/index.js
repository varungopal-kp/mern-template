/**
 *
 * ChatRoomPage
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
import makeSelectGlobalPage from 'containers/App/selectors';
import makeSelectContactPage from './selectors';

import reducer from './reducer';
import saga from './saga';

import Form from './form';
import { getList, deleteChat } from './actions';

export class ChatRoomPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { page: 'view', initialValues: false };
  }

  componentDidMount() {
    this.props.setTitle('Chat Room');
    this.props.getList();
  }

  viewClick(data) {
    this.setState({ page: 'view', initialValues: data });
  }

  render() {
    const { chatRoomPage, getList, global } = this.props;
    const { page, initialValues } = this.state;

    return (
      <div>
        <Helmet>
          <title>ChatRoomPage</title>
          <meta name="description" content="Description of ChatRoomPage" />
        </Helmet>
        {(() => {
          switch (page) {
            case 'view':
              return (
                <Form
                  initialValues={initialValues}
                  getList={getList}
                  chatRoomPage={chatRoomPage}
                  currentUser={global.currentUser}
                  deleteChat={id => this.props.deleteChat(id)}
                />
              );
            default:
              return '';
          }
        })()}
      </div>
    );
  }
}

ChatRoomPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  chatRoomPage: makeSelectContactPage(),
  global: makeSelectGlobalPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getList());
    },
    deleteChat: id => {
      dispatch(deleteChat(id));
    },
  };
}
const withReducer = injectReducer({ key: 'chatRoomPage', reducer });
const withSaga = injectSaga({ key: 'chatRoomPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ChatRoomPage);
