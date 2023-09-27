import { createContext, useState } from "react";

export const LoginData = createContext({
  loginData: null,
  setLoginData: (args) => {},
});

const LoginContext = ({ children }) => {
  const [loginData, setLoginData] = useState(null);
  return (
    <LoginData.Provider value={{ loginData, setLoginData }}>
      {children}
    </LoginData.Provider>
  );
};

export default LoginContext;
