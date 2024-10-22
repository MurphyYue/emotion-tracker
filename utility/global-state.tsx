"use client"
import { FC, useState } from "react";
import { GlobalContext } from "@/context";
interface GlobalStateProps {
  children: React.ReactNode;
}

export const GlobalState: FC<GlobalStateProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <GlobalContext.Provider value={{activeTab, setActiveTab}}>
      {children}
    </GlobalContext.Provider>
  )
}