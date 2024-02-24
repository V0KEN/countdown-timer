import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(100);
  const timeRef = useRef(null);

  useEffect(() => {
    if(isRunning) {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev - 1)
      }, 1000);
    } else {
      clearInterval(timeRef.current);
    }
    return() => {
      clearInterval(timeRef.current)
    }
  }, [isRunning]);

  const handleStart = () => {
    if(!isRunning) {
      setIsRunning(true);
    }
  }

  const handleStop = () => {
    if(isRunning) {
      setIsRunning(false);
    }
  }

  const handleRestart = () => {
    setTime(100);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Timer React </h1>
        <div>
          <p>Elapsed Time : {time} seconds</p>
        </div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handleStop}>Stop</button>
      </header>
    </div>
  );
}

export default App;
