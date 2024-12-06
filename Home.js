// src/components/Home.js
import React from 'react';
import Reminder from './Reminder';
import stretchIcon from './stretch_icon.png';
import waterIcon from './water_icon.png';

function Home({
  stretchCountdown,
  waterCountdown,
  stretchInterval,
  waterInterval,
  setStretchInterval,
  setWaterInterval,
  handleStartCountdown
}) {
  return (
    <div className="home">
      <h1>Study Habit Reminders</h1>
      <div className="reminder-container">
        <Reminder
          title="Stretch"
          icon={stretchIcon}
          countdown={stretchCountdown}
          interval={stretchInterval}
          setInterval={setStretchInterval}
          startCountdown={() => handleStartCountdown("stretch")}
        />
        <Reminder
          title="Drink"
          icon={waterIcon}
          countdown={waterCountdown}
          interval={waterInterval}
          setInterval={setWaterInterval}
          startCountdown={() => handleStartCountdown("water")}
        />
      </div>
    </div>
  );
}

export default Home;
