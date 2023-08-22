import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("userdetails"));

  function login(token) {
    setIsLoggedIn(!!token);
    localStorage.setItem("userdetails", token);
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem("userdetails");
  }

  const context = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}
