import React, { createContext, useEffect } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';
export const AuthContext = createContext();
import { useState } from 'react';
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const {employees,admin}= getLocalStorage();
    setUserData({employees,admin});
  }, []);
  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
