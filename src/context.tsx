"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState, ReactNode } from "react";

type NavTabsContextType = {
  navTabsValue: number;
  setNavTabsValue: (value: number) => void;
};

type SearchTextContextType = {
  searchText: string;
  setSearchText: (searchText: string) => void;
};

const NavTabsContext = createContext<NavTabsContextType | null>(null);
const SearchTextContext = createContext<SearchTextContextType | null>(null);

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

export const SearchTextProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <SearchTextContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchTextContext.Provider>
  );
};

export const useNavTabs = () => {
  const context = useContext(NavTabsContext);
  if (!context) {
    throw new Error("useNavTabs must be used within a NavTabsProvider");
  }
  return context;
};

export const useSearchText = () => {
  const context = useContext(SearchTextContext);
  if (!context) {
    throw new Error("useNavTabs must be used within a NavTabsProvider");
  }
  return context;
};
