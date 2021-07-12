import React, { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import '../02-useEffect/form.css';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <hr />

      <h3>
        Counter : <Small value={counter} />
      </h3>
      <button className='btn btn-outline-primary mt-4' onClick={increment}>
        Plus One +1
      </button>
      <button
        className='btn btn-outline-primary ms-4 mt-4 '
        onClick={() => {
          setShow(!show);
        }}>
        Show / Hide = {JSON.stringify(show)}
      </button>
    </div>
  );
};
