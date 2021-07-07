import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(200);

  return (
    <>
      <h1>Counter with hook {state}</h1>
      <hr />
      <button className='btn btn-primary' onClick={() => increment()}>
        +1
      </button>
      <button className='btn btn-danger' onClick={() => decrement(2)}>
        -2
      </button>
      <button className='btn btn-outline-danger' onClick={reset}>
        Reset
      </button>
    </>
  );
};
