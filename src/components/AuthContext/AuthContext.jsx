import React, { createContext, useState } from 'react';

export const AuthenticationContext = createContext();

const AuthContext = ({ children }) => {
  const [registered, setRegistered] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn((old) => !old);
  };

  const addToRegistrations = (id) => {
    setRegistered((old) => [...old, id]);
  };

  const removeFromRegistrations = (id) => {
    setRegistered((old) => old.filter((registration) => registration !== id));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        toggleLogin,
        isLoggedIn,
        registered,
        addToRegistrations,
        removeFromRegistrations,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
