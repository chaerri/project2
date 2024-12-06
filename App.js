// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stats from './components/Stats';
import './App.css';

function App() {
  const [page, setPage] = useState("home");
  const [stretchCountdown, setStretchCountdown] = useState(0); // stretch countdown in seconds
  const [waterCountdown, setWaterCountdown] = useState(0); // water countdown in seconds
  const [stretchInterval, setStretchInterval] = useState(30); // default 30 mins
  const [waterInterval, setWaterInterval] = useState(10); // default 10 mins

  // Countdown logic for stretch
  useEffect(() => {
    if (stretchCountdown > 0) {
      const timer = setInterval(() => {
        setStretchCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [stretchCountdown]);

  // Countdown logic for water
  useEffect(() => {
    if (waterCountdown > 0) {
      const timer = setInterval(() => {
        setWaterCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [waterCountdown]);

  // Handler to set countdown when "OK" button is clicked
  const handleStartCountdown = (type) => {
    if (type === "stretch") {
      setStretchCountdown(stretchInterval * 60); // in seconds
    } else if (type === "water") {
      setWaterCountdown(waterInterval * 60); // in seconds
    }
  };

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {page === "home" && (
        <Home
          stretchCountdown={stretchCountdown}
          waterCountdown={waterCountdown}
          stretchInterval={stretchInterval}
          waterInterval={waterInterval}
          setStretchInterval={setStretchInterval}
          setWaterInterval={setWaterInterval}
          handleStartCountdown={handleStartCountdown}
        />
      )}
      {page === "stats" && (
        <Stats stretchCountdown={stretchCountdown} waterCountdown={waterCountdown} />
      )}
    </div>
  );
}

export default App;
