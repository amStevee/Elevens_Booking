import { createContext, useState } from "react";

export const useContexts = createContext({ toggleD: false, toggleO: false });

const Context = ({ children }) => {
  const [toggleDate, setToggleDate] = useState(() => ({
    toggleD: false,
  }));

  const [toggleOptions, setToggleOptions] = useState(() => ({
    toggleO: false,
  }));

  return (
    <useContexts.Provider
      value={[toggleDate, setToggleDate, toggleOptions, setToggleOptions]}
    >
      {children}
    </useContexts.Provider>
  );
};

export default Context;
