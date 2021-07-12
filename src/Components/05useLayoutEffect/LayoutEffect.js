import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import './Layout.css';

export const LayoutEffect = () => {
  const pTag = useRef();
  const [box, setBox] = useState({});
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    setBox(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>Layout effect Breaking Bad Quotes</h1>
      <hr />

      <blockquote className='blockquote text-right'>
        <p className='mb-3' ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <button className='btn btn-outline-primary' onClick={increment}>
        Next Quote
      </button>
      <div className='mt-4'>
        <pre>{JSON.stringify(box, null, 3)}</pre>
      </div>
    </div>
  );
};
