import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userType, setUserType] = useState("user");

  const [userDetails, setUserDetails] = useState(null);

  return (
    <LoginContext.Provider
      value={{
        logins: isLogin,
        userDetail: [userDetails],
        setIsLogin,
        setUserDetails,
        userType,
        setUserType,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
