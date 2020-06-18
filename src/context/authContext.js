import React, { createContext } from "react";
import useGetUser from '../hooks/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = useGetUser()

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;