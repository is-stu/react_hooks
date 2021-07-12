import React, { useState } from 'react';
import { MultipleHooks } from '../03Examples/MultipleHooks';
import '../02useEffect/form.css';

export const ReactExampleRef = () => {
  const [show, setShow] = useState(false);

  const changeView = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>ReactExampleRef</h1>
      <hr />
      {show && <MultipleHooks />}

      <button className='btn btn-outline-primary mt-4' onClick={changeView}>
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};
