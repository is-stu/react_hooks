import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import './MultipleHooks.css';

export const MultipleHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-3'> {quote} </p>
          <footer className='blockquote-footer'>{author}</footer>
          <button className='btn btn-outline-primary' onClick={increment}>
            Next Quote
          </button>
        </blockquote>
      )}
    </div>
  );
};
