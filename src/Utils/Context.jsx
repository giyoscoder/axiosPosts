import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [allow, setAllow] = useState();
  return (
    <Context.Provider value={{ allow, setAllow }}>{children}</Context.Provider>
  );
};
