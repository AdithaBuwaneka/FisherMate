// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // Add state for user info

  const login = (userData) => {
    setIsAuthenticated(true);
    setUserInfo(userData); // Store user data on login
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    setUserInfo(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
