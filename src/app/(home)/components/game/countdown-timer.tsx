import React from 'react';
import useCountdownTimer from '../../hook/countdown-timer.hook';

const CountdownTimer = ({ time, onComplete }: { time: number, onComplete: (value: boolean) => void }) => {
  const timerVal = useCountdownTimer(time, onComplete);
  return (
    <>
      Time Left: {timerVal}
    </>
  );
};

export default CountdownTimer;
