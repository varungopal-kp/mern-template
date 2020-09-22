import React, { Component } from 'react';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const chatId = uuidv4();
const socket = io('http://localhost:8000/', { query: `user=${chatId}` });

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { chatMessage: '', chatResponse: false, chatHistory: [] };
  }

  componentDidMount() {
    socket.on(chatId, chatResponse => this.setState({ chatResponse }));
  }

  componentWillUnmount() {
    socket.on('disconnect', function() {});
  }

  componentDidUpdate(preProps, preState) {
    const { chatResponse, chatHistory } = this.state;
    if (preState.chatResponse != chatResponse) {
      const newChatHistory = chatHistory;
      newChatHistory.push(chatResponse);
      this.setState({ chatHistory: newChatHistory });
    }
  }

  sendChat() {
    const { chatMessage } = this.state;

    socket.emit('chat', { message: chatMessage,  time: new Date() });
  }

  render() {
    const { chatHistory } = this.state;
    
    return (
      <>
        <div className="chat-popup">
          <form className="chat-container">
            <h1>Chat</h1>

            <div className="chat-history" style={{ minHeight: '200px' }}>
              {chatHistory && (
                <ul style={{ padding: '12px' }}>
                  {chatHistory.map(_a => (
                    <li style={{ marginBottom: '10px' }}>{_a.message}</li>
                  ))}
                </ul>
              )}
            </div>

            <input
              placeholder="Type message.."
              name="msg"
              type="text"
              onChange={e => {
                const { value } = e.target;
                this.setState({ chatMessage: value });
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  this.sendChat();
                  e.target.value = '';
                }
              }}
            />
          </form>
        </div>
        <div className="sub-footer">
          <div className="container">
            <p>Copyright 2018 © All Rights Reserved</p>
          </div>
        </div>
      </>
    );
  }
}
