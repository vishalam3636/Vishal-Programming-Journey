import { createContext, useContext } from "react";

export const NameContext = createContext();

export const useName = () => useContext(NameContext);

export const NameContextProvider = (props) => {
  console.log(
    NameContext,
    ">>>>>>>>>>>> NameContext i.e; createContext() in NameContext.js"
  );
  console.log(
    useName,
    ">>>>>>> useName i.e; useContext(NameContext) in NameContext.js"
  );
  console.log(
    useName(),
    ">>>>>>> useName() i.e; useContext(NameContext)() in NameContext.js"
  );
  console.log(props, ">>>>> props in NameContext.js");
  console.log(props.children, ">>>>>>>>props.children in NameContext.js");
  return (
    <NameContext.Provider value={{ name: "Vishal" }}>
      {props.children}
    </NameContext.Provider>
  );
};
