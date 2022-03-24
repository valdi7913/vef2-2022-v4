import React, { useState, createContext } from 'react';

export const AuthenticationContext = createContext();

const AuthContext = ({ children }) =>{
  const [registered, setRegistered] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  const toggleLogin = () => {
    setLoggedIn(old => !old);
    console.log("🚀 ~ file: AuthContext.jsx ~ line 10 ~ AuthContext ~ isLoggedIn", isLoggedIn)

  }

  const addToRegistrations = (id, comment) => { 
    const newRegistration = {
      id: id,
      athugasemd: comment
    }

    setRegistered({
      ...registered,
      ...newRegistration
    });
  }

  const removeFromRegistrations = (id) => {
    const newRegistrations = {
      ...registered
    };

    delete newRegistrations[id];

    setRegistered(newRegistrations);
  }


  return (
    <AuthenticationContext.Provider value={{ toggleLogin, isLoggedIn, registered, addToRegistrations, removeFromRegistrations }}>
      {children}
    </AuthenticationContext.Provider>  
  );
}

export default AuthContext;