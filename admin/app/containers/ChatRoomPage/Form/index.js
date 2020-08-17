import React, { Component } from 'react';
import io from 'socket.io-client';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../style.css';

const socket = io('http://localhost:8000/');
const chatId = localStorage.getItem('_token');

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
    socket.on('chat message', chatResponse => this.setState({ chatResponse }));
  }

  componentWillUnmount() {
    socket.on('disconnect', function() {});
  }

  componentDidUpdate(preProps, preState) {
    const { chatResponse, selectedUser, chatHistory } = this.state;
    if (preState.chatResponse != chatResponse) {
      const newChatHistory = chatHistory;
      newChatHistory.push(chatResponse);
      this.setState({ chatHistory: newChatHistory });
      console.log(newChatHistory);
    }
    if (preState.selectedUser != selectedUser) {
      const chatHistory = selectedUser.message;
      this.setState({ chatHistory });
    }
  }

  sendChat() {
    const { chatMessage } = this.state;

    socket.emit('chat', { message: chatMessage, chatId });
    this.setState({ chatMessage: '' });
  }

  render() {
    const { list } = this.props.chatRoomPage;
    const { chatHistory, chatMessage } = this.state;

    return (
      <div className="container clearfix">
        <div className="people-list" id="people-list">
          <div className="search">
            <input type="text" placeholder="search" />
            <i className="fa fa-search" />
          </div>
          <ul className="list">
            {list.map(_a => (
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
                  <div className="name">User</div>
                  <div className="status">
                    <i className="fa fa-circle online" /> online
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="chat">
          <div className="chat-header clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
              alt="avatar"
            />

            <div className="chat-about">
              <div className="chat-with">Chat with User</div>
              <div className="chat-num-messages">already 1 902 messages</div>
            </div>
            <i className="fa fa-star" />
          </div>

          <div className="chat-history">
            {chatHistory && (
              <ul>
                {chatHistory.map(_a => (
                  <li className="clearfix">
                    <div className="message-data align-right">
                      <span className="message-data-time">10:10 AM, Today</span>
                      &nbsp; &nbsp;
                      <span className="message-data-name">Olia</span>
                      <i className="fa fa-circle me" />
                    </div>
                    <div className="message other-message float-right">
                      {_a}
                    </div>
                  </li>
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
