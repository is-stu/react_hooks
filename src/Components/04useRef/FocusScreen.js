import React, { useRef } from 'react';
import '../03Examples/MultipleHooks.css';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type='text'
        placeholder='Su nombre'
        className='form-control'
        ref={inputRef}
      />

      <button className='btn btn-outline-primary mt-4' onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};
