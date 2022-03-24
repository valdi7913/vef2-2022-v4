import React, { useState, createContext } from 'react';

export const AuthenticationContext = createContext();

const AuthContext = ({ children }) =>{
  const [registered, setRegistered] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  const toggleLogin = () => {
    setLoggedIn(old => !old);
    console.log("🚀 ~ file: AuthContext.jsx ~ line 10 ~ AuthContext ~ isLoggedIn", isLoggedIn)

  }

  const addToRegistrations = (id) => {  
    console.log('Added id to registrations :>> ', id);
    setRegistered(old => [...old, id]);
  }

  const removeFromRegistrations = (id) => {
    setRegistered(old => old.filter(registration => registration !== id));
  }


  return (
    <AuthenticationContext.Provider value={{ toggleLogin, isLoggedIn, registered, addToRegistrations, removeFromRegistrations }}>
      {children}
    </AuthenticationContext.Provider>  
  );
}

export default AuthContext;