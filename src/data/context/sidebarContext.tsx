import React, { useState, useContext, createContext } from 'react';

interface SidebarInterface {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContextData = createContext<SidebarInterface> ({} as SidebarInterface);

const SidebarContext: React.FC = ({ children }) => {
  const [active, setActive] = useState(true);

  return (
    <SidebarContextData.Provider value={{
      active, setActive
    }}>
      {children}
    </SidebarContextData.Provider>
  );
}

export default SidebarContext;

export function useSidebar () {
  const context = useContext(SidebarContextData);
  const { active, setActive } = context;
  return { active, setActive };
}
