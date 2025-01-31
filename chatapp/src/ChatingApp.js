
import React, { useState, useEffect } from 'react';
import "../src/index.css";

function ChatingApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
   
    const initialMessages = [
      { user: 'User 1', text: 'Hello!' },
      { user: 'User 2', text: 'Hi there!' },
    ];
    setMessages(initialMessages);
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessageObj = { user: 'You', text: newMessage.trim() };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');

     
    }
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user === 'You' ? 'message-sent' : 'message-received'}`}>
            <span className="message-user">{message.user}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatingApp;