import React, { Component } from 'react';
import io from 'socket.io-client';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import '../style.css';
const chatId = localStorage.getItem('user');
const socket = io('http://localhost:8000/', { query: `user=${chatId}` });
const socket2 = io('http://localhost:8000/');

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: false,
      chatMessage: '',
      chatResponse: '',
      chatHistory: [],
    };
  }

  componentDidMount() {
    socket2.on('newRoom', newRoom => this.props.getList());
  }

  componentWillUnmount() {
    socket.on('disconnect', function() {});
  }

  componentDidUpdate(preProps, preState) {
    const { selectedUser } = this.state;

    if (preState.selectedUser != selectedUser) {
      socket.off();
      socket.on(selectedUser.user, cr => {
        const newChatHistory = chatHistory;
        newChatHistory.push(cr);
        return this.setState({ chatHistory: newChatHistory });
      });
      const chatHistory = selectedUser.chats;
      this.setState({ chatHistory });
      this.props.getList();
    }
  }

  sendChat() {
    const { chatMessage, selectedUser } = this.state;
    const chatId = selectedUser.user;

    if (selectedUser) {
      socket.emit('chat', {
        message: chatMessage,
        chatId,
        time: new Date(),
      });
    }

    this.setState({ chatMessage: '' });
  }

  render() {
    const { list } = this.props.chatRoomPage;
    const { currentUser, deleteChat } = this.props;
    const { chatHistory, chatMessage, selectedUser } = this.state;

    return (
      <div className="container clearfix">
        <div className="people-list" id="people-list">
          <ul className="list">
            {list.map((_a, i) => (
              <li
                className="clearfix chat-user"
                key={_a._id}
                onClick={e => this.setState({ selectedUser: _a })}
              >
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
                  alt="avatar"
                />
                <div className="about">
                  <div className="name">User #{i + 1}</div>
                  <div className="status">
                    <i className="fa fa-circle online" />{' '}
                    {_a.time && moment(_a.time).format('DD-MM-YYYY')}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="chat">
          {selectedUser && (
            <div className="chat-header clearfix">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
                alt="avatar"
              />

              <div className="chat-about">
                <div className="chat-with">Chat with User</div>
                <div className="chat-num-messages">
                  already {selectedUser.chats.length} messages
                </div>
              </div>
              <Button
                variant="contained"
                color="secondary"
                style={{ float: 'right' }}
                onClick={e => {
                  deleteChat(selectedUser._id);
                  this.setState({ selectedUser: false });
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
          )}
          <div className="chat-history">
            {chatHistory && (
              <ul>
                {chatHistory.map(_a => (
                  <>
                    {_a.user == currentUser ? (
                      <li className="clearfix">
                        <div className="message-data align-right">
                          <span className="message-data-time">
                            {_a.time &&
                              moment(_a.time).format('DD-MM-YYYY h:mm:ss')}
                          </span>
                          &nbsp; &nbsp;
                          <span className="message-data-name">You</span>
                          <i className="fa fa-circle me" />
                        </div>
                        <div className="message my-message float-right">
                          {_a.message}
                        </div>
                      </li>
                    ) : (
                      <li className="clearfix">
                        <div className="message-data align-left">
                          <span className="message-data-time">
                            {_a.time &&
                              moment(_a.time).format('DD-MM-YYYY h:mm:ss')}
                          </span>
                          &nbsp; &nbsp;
                          <span className="message-data-name" />
                          <i className="fa fa-circle me" />
                        </div>
                        <div className="message other-message float-left">
                          {_a.message}
                        </div>
                      </li>
                    )}
                  </>
                ))}
              </ul>
            )}
          </div>

          <div className="chat-message clearfix">
            <textarea
              name="message-to-send"
              id="message-to-send"
              placeholder="Type your message"
              rows="3"
              value={chatMessage}
              onChange={e => {
                const { value } = e.target;
                this.setState({ chatMessage: value });
              }}
            />
            <i className="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o" />
            <button
              type="button"
              onClick={e => {
                this.sendChat();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
