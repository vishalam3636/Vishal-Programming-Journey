import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [name, setName] = useState("Vishal");
  const [city, setCity] = useState("Kanpur");
  const [count, setCount] = useState(0);

  return (
    <UserContext.Provider value={{ name, city, count, setCount }}>
      {props.children}
    </UserContext.Provider>
  );
};
