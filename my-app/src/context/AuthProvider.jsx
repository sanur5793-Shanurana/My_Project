import React, { createContext, useEffect } from 'react';
import { getLocalStorage, setlocalstorage } from '../utils/LocalStorage';
export const AuthContext = createContext();
import { useState } from 'react';
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setlocalstorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);
  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
