import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const { hours, minutes, seconds } = prevTime;

          if (seconds === 59) {
            if (minutes === 59) {
              return { hours: hours + 1, minutes: 0, seconds: 0 };
            } else {
              return { hours, minutes: minutes + 1, seconds: 0 };
            }
          } else {
            return { hours, minutes, seconds: seconds + 1 };
          }
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleRestart = () => {
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div>
      <div className="timer-instde-box">
        <div className="timer-container">
          <div className='timer-box'>
            <div className='hour'>{String(time.hours).padStart(2, '0')} Hour</div>
            <div className='time-box1'>
              <div className='timer-box2'>
                <div className='num1'>{String(time.minutes).padStart(2, '0')}</div>
                <div className='text1'>Min</div>
              </div>
              <div className='Colon'>:</div>
              <div className='timer-box3'>
                <div className='num2'>{String(time.seconds).padStart(2, '0')}</div>
                <div className='text2'>Sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <button onClick={handleStart} className="bold-text">Start</button>
        <button onClick={handleStop} className="bold-text">Stop</button>
        <button onClick={handleRestart} className="bold-text">Restart</button>
      </div>
    </div>
  );
}

export default App;
