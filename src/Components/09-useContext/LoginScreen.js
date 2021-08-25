import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UseContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const handleClick = (e) => {
    e.preventDefault();
    setUser({
      id: 123,
      name: 'Stewar Marin Bedoya',
    });
  };
  return (
    <div>
      <h1>Login Screen here</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleClick}>
        Log in
      </button>
    </div>
  );
};
