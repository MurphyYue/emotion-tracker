"use client";
import tabList from "@/config/navConfig";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext } from "react";
import { GlobalContext } from "@/context"
import { Tab } from "@/types/types"
const NavBar: React.FC = () => {
  const { activeTab, setActiveTab } = useContext(GlobalContext);
  console.log(activeTab)
  const tabClick = (tab: Tab) => {
    setActiveTab(tab.name);
    console.log(tab.name)
  }
  return (
    <Tabs defaultValue={activeTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        {tabList.map((tab) => (
          <TabsTrigger key={tab.name} value={tab.name} onClick={() => tabClick(tab)}>{tab.name}</TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
export default NavBar;
