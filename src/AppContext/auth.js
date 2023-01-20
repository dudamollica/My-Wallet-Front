import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("");

  function saveToken(token) {
    setToken(token);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        saveToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
