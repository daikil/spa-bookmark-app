"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type NavTabsContextType = {
  navTabsValue: number;
  setNavTabsValue: (value: number) => void;
};

const NavTabsContext = createContext<NavTabsContextType | null>(null);

export const NavTabsProvider = ({ children }: { children: ReactNode }) => {
  const [navTabsValue, setNavTabsValue] = useState<number>(0);

  return (
    <NavTabsContext.Provider value={{ navTabsValue, setNavTabsValue }}>
      {children}
    </NavTabsContext.Provider>
  );
};

export const useNavTabs = () => {
  const context = useContext(NavTabsContext);
  if (!context) {
    throw new Error("useNavTabs must be used within a NavTabsProvider");
  }
  return context;
};
