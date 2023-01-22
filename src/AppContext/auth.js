import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");

  function saveToken(token) {
    setToken(token);
  }

  function saveName(name){
    setUserName(name)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        saveToken,
        saveName,
        userName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
