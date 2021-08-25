import React, { useContext } from 'react';
import { UserContext } from './UseContext';

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>HomeScreen App here</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};
