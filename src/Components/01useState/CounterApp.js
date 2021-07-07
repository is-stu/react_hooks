import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });

  const { counter1, counter2, counter3 } = counters;

  return (
    <>
      <h2>Counter1 {counter1}</h2>
      <h2>Counter2 {counter2}</h2>
      <h2>Counter3 {counter3}</h2>
      <hr />
      <button
        onClick={() =>
          setCounters({
            ...counters,
            counter1: counter1 + 1,
          })
        }
        className='btn btn-primary'>
        +1
      </button>
    </>
  );
};
