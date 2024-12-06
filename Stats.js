// src/components/Stats.js
import React from 'react';

function Stats({ stretchCountdown, waterCountdown }) {
  return (
    <div className="stats">
      <h1>User Statistics</h1>
      <div>
        <p>Stretch Countdown: {Math.floor(stretchCountdown / 60)}:{String(stretchCountdown % 60).padStart(2, '0')}</p>
        <p>Water Countdown: {Math.floor(waterCountdown / 60)}:{String(waterCountdown % 60).padStart(2, '0')}</p>
      </div>
      <div className="stats-box">
        <p>Total study time (in minutes): <span>415</span></p>
        <p>Total amount of stretches taken: <span>13</span></p>
        <p>Total cups of water drank: <span>41</span></p>
      </div>
      <div className="notes">
        <p>Notes:</p>
        <ul>
          <li>Clearing cookies will delete your data</li>
          <li>Using a different device or browser will start a new log</li>
        </ul>
      </div>
    </div>
  );
}

export default Stats;
