import React, { useState } from 'react';

function MessageForm({ addMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      addMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="MessageForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageForm;
