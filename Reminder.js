// src/components/Reminder.js
import React from 'react';

function Reminder({ title, icon, countdown, interval, setInterval, startCountdown }) {
  const handleOkClick = () => {
    startCountdown(); // Start countdown when OK button is clicked
  };

  const handleIntervalChange = (event) => {
    setInterval(parseInt(event.target.value));
  };

  return (
    <div className="reminder">
      <p>{Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')} minutes till next {title.toLowerCase()} break</p>
      <div className="icon-button">
        <img src={icon} alt={`${title} Icon`} />
        <button 
          onClick={startCountdown} 
          disabled={countdown > 0}
          style={{
            backgroundColor: countdown === 0 ? '#673ab7' : '#ddd',
            cursor: countdown === 0 ? 'pointer' : 'not-allowed',
            color: countdown === 0 ? 'white' : 'gray'
          }}
        >
          {title}!
        </button>
      </div>
      <div className="interval">
        <label>
          Set interval to
          <select value={interval} onChange={handleIntervalChange}>
            {[...Array(60)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          minutes.
        </label>
        <button onClick={handleOkClick}>OK</button>
      </div>
    </div>
  );
}

export default Reminder;
