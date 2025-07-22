// context/UserContext.js
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
import Cookies from "js-cookie";

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // const storedToken = localStorage.getItem("token");
    // const storedUser = localStorage.getItem("userData");
    const storedToken = Cookies.get("token");
    const storedUser = Cookies.get("userData");

    if (storedToken) setToken(storedToken);

    try {
      if (storedUser && storedUser !== "undefined") {
        setUserData(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user data:", error);
      // optionally clear corrupted user
      // localStorage.removeItem("userData");
      Cookies.remove("userData");
    }
  }, []);

  return (
    <UserContext.Provider value={{ token, userData }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use anywhere in your app
export const useUser = () => useContext(UserContext);
