import React from "react";

export const AppContext = React.createContext();

const initState = {
  isAuth: false,
  email: null,
  password: null,
  token: null,
};
function AppContextProvider({ children }) {
  const [authState, setAuthState] = React.useState(initState);

  function handleLogin(user) {
    if (
      user.email === authState.email &&
      user.password === authState.password
    ) {
      setAuthState({
        isAuth: true,
        email: user.email,
        password: user.password,
      });
      return true;
    } else {
      return false;
    }
  }

  function handleLogout() {
    setAuthState(initState);
  }
  function handleSign(user) {
    setAuthState({
      isAuth: false,
      email: user.email,
      password: user.password,
    });
  }

  const value = {authState, handleLogin, handleLogout, handleSign };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
