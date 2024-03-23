import { createContext, useContext, useState } from "react";

const LoginContext = createContext(null);

export const useLogin = () => useContext(LoginContext);

export const LoginContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userCred, setUserCred] = useState(null);

  return (
    <LoginContext.Provider
      value={{ isLogin, setIsLogin, userCred, setUserCred }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

/**
 ********************** CREATING CONTEXT STUFF (quick view) ******************
 import { createContext, useContext, useState } from "react";

  const LoginContext = createContext(null);

  export const useLogin = () => useContext(LoginContext);

  export const LoginContextProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    return (
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        {props.children}
      </LoginContext.Provider>
    );
  };
 */
