import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UseContext';

export const MainApp = () => {
  const user = {
    id: 123,
    name: 'Stewar',
    email: 'stewar1020@gmail.com',
  };
  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
};
