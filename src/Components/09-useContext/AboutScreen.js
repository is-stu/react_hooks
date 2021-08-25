import React, { useContext } from 'react';
import { UserContext } from './UseContext';

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const handleClick = (e) => {
    e.preventDefault();
    setUser({});
  };
  return (
    <div>
      <h1>About Screen here</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className='btn btn-warning' onClick={handleClick}>
        Log out
      </button>
    </div>
  );
};
