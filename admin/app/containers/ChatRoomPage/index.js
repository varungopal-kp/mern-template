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
import makeSelectContactPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import List from './list';
import Form from './form';
import { getList } from './actions';

export class ChatRoomPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { page: 'list', initialValues: false };
  }

  componentDidMount() {
    this.props.setTitle('Chat Room');
    this.props.getList();
  }

  viewClick(data) {
    this.setState({ page: 'view', initialValues: data });
  }

  render() {
    const { chatRoomPage ,getList} = this.props;
    const { page, initialValues } = this.state;

    return (
      <div>
        <Helmet>
          <title>ChatRoomPage</title>
          <meta name="description" content="Description of ChatRoomPage" />
        </Helmet>
        {(() => {
          switch (page) {
            case 'list':
              return (
                <List
                  chatRoomPage={chatRoomPage}
                  viewClick={e => this.viewClick(e)}
                 
                />
              );
            case 'view':
              return <Form initialValues={initialValues}  getList={getList}   chatRoomPage={chatRoomPage}/>;
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
});

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getList());
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
