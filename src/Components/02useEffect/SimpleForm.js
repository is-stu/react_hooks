import React, { useEffect, useState } from 'react';
import './form.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('hey');
  });

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
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
