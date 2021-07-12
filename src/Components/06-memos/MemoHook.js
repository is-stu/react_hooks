import React, { useMemo, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { heavyProcess } from '../../Helpers/HeavyProcess';
import '../02-useEffect/form.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <p>{memoHeavyProcess}</p>

      <h3>
        Counter : <small>{counter}</small>
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
