
import React, { useState } from 'react';
import './index.css';

function EmailingApp() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sent, setSent] = useState(false); 

  const sendEmail = () => {
    

    if (to.trim() !== '' && subject.trim() !== '' && body.trim() !== '') {
      setSent(true); 
      console.log("Email Sent:", { to, subject, body });
      
      setTo('');
      setSubject('');
      setBody('');
    } else {
      alert("Please fill in all the fields."); 
    }
  };

  return (
    <div className="email-container">
      <h2>Email App</h2>

      {sent ? (
        <p>Email sent successfully!</p>
      ) : (
        <form>
          <label htmlFor="to">To:</label>
          <input
            type="email"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Enter recipient email"
            required 
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter email subject"
            required
          />

          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter email body"
            required
          ></textarea>

          <button type="button" onClick={sendEmail}>
            Send Email
          </button>
        </form>
      )}
    </div>
  );
}

export default EmailingApp;