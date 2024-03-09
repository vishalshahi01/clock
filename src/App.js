import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  const setTime = () => {
    setDate(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const interval = setInterval(setTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: '200px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '5em' }}>{date}</h1>
      </div>
    </>
  );
}

export default App;
