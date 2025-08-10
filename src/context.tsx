"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState, ReactNode } from "react";

type NavTabsContextType = {
  navTabsValue: number;
  setNavTabsValue: (value: number) => void;
};

const NavTabsContext = createContext<NavTabsContextType | null>(null);

export const NavTabsProvider = ({ children }: { children: ReactNode }) => {
  const tabMap: Record<string, number> = {
    "/": 0,
    "/tags": 1,
  };
  const pathName = usePathname();
  console.log(pathName);

  const tabNumber = tabMap[pathName] ?? 0;
  const [navTabsValue, setNavTabsValue] = useState<number>(tabNumber);

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
