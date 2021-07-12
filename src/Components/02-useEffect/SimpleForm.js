import React, { useEffect, useState } from 'react';
import './form.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('hey');
  }, []);

  const handleInputChange = ({ target }) => {
    console.log(target.name);
    console.log(target.value);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Name'
          autoComplete='nope'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === '123' && <Message />}
    </>
  );
};
