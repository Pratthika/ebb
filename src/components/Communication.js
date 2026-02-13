import React, { useState } from 'react';
import axios from 'axios';

const Communication = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = e => {
    setMessage(e.target.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/send-message', { message });

      // Update messages state with the new message
      setMessages([...messages, res.data]);

      // Clear the message input field after sending
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Communication</h2>
      <div>
        {/* Display previous messages */}
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={message}
          onChange={handleChange}
          placeholder="Type your message here..."
          required
        ></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Communication;
