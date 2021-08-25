import React, { useContext } from 'react';
import { UserContext } from './UseContext';

export const HomeScreen = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);
  return (
    <div>
      <h1>HomeScreen App here</h1>
      <hr />
    </div>
  );
};
