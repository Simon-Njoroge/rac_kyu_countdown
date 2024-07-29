import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const calculateTimeLeft = () => {
    const targetDate = new Date(new Date().getFullYear(), 8, 21); 
    const now = new Date();
    
    if (now > targetDate) {
      targetDate.setFullYear(now.getFullYear() + 1);
    }

    const difference = targetDate.getTime() - now.getTime();
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="grid grid-flow-col gap-5  text-center auto-cols-max justify-center items-center text-2xl text-blue-900 font-extrabold w-full h-full" id="background">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timeLeft.days } as React.CSSProperties}></span>
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timeLeft.hours } as React.CSSProperties}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timeLeft.minutes } as React.CSSProperties}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timeLeft.seconds } as React.CSSProperties}></span>
          </span>
          sec
        </div>
      </div>
    </>
  );
}

export default App;
