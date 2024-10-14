import { createContext, useState } from "react";
const AppContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [storage, setStorage] = useState();
  const [theme, setTheme] = useState("dark-theme");
  const [toogle, setToogle] = useState(false);

  return (
    <AppContext.Provider
      value={{
        storage,
        setStorage,
        toogle,
        setToogle,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
