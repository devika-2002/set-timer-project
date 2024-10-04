import './App.css';

function App() {
  return (
    <div>
      <div className="timer-instde-box">
        <div className="timer-container">
          <div className='timer-box'>
            <div className='hour'>01 Hour</div>

            <div className='time-box1'>
              <div className='timer-box2'>
                <div className='num1'>40</div>
                <div className='text1'>Min</div>
              </div>
              <div className='Colon'>:</div>
              <div className='timer-box3'>
                <div className='num2'>20</div>
                <div className='text2'>Sec</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='button-container'>
        <button className="bold-text">Start</button>
        <button className="bold-text">Stop</button>
        <button className="bold-text">Restart</button>
      </div>
    </div>
  );
}

export default App;
