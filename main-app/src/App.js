
import React, { useState, useEffect } from 'react';

const App = () => {
  const [ChatApp, setChatApp] = useState(null);
  const [EmailApp, setEmailApp] = useState(null);

  useEffect(() => {
    
    const loadChatApp = async () => {
      const { default: chatApp } = await import('chatApp/ChatingApp');
      setChatApp(() => chatApp);
    };

    const loadEmailApp = async () => {
      const { default: emailApp } = await import('emailApp/EmailingApp'); 
      setEmailApp(() => emailApp);
    };

    loadChatApp();
    loadEmailApp();
  }, []);

  return (
    <div>
      <h1>Main Application</h1>
      <div>
        {ChatApp ? <ChatApp /> : 'Loading Chat...'}
      </div>
      <div>
        {EmailApp ? <EmailApp /> : 'Loading Email...'}
      </div>
    </div>
  );
};

export default App;


