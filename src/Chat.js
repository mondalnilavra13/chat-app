import React, { useState, useEffect } from 'react';
import Message from './Message';
import MessageForm from './MessageForm';

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="Chat">
      <h2>Chat App</h2>
      <div className="message-list">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <MessageForm addMessage={addMessage} />
    </div>
  );
}

export default Chat;
