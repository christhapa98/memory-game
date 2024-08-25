// src/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ startDate }:any) => {
  const calculateTimePassed = () => {
    const difference = +new Date() - +new Date(startDate);
    let timePassed = {};

    if (difference > 0) {
      timePassed = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hr: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timePassed;
  };

  const [timePassed, setTimePassed] = useState<any>(calculateTimePassed());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimePassed(calculateTimePassed());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents:any = [];

  Object.keys(timePassed).forEach((interval) => {
    if (!timePassed[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timePassed[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Just now</span>}
    </div>
  );
};

export default Timer;
