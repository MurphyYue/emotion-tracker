"use client";
import tabList from "@/config/navConfig";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext } from "react";
import { GlobalContext } from "@/context"
import { useRouter } from 'next/navigation'
import { Tab } from "@/types/types"
const NavBar: React.FC = () => {
  const { activeTab, setActiveTab } = useContext(GlobalContext);
  const router = useRouter();
  const tabClick = (tab: Tab) => {
    setActiveTab(tab.name);
    router.push(tab.path)
  }
  return (
    <Tabs defaultValue={activeTab}>
      <TabsList>
        {tabList.map((tab) => (
          <TabsTrigger value={tab.name} onClick={() => tabClick(tab)}>{tab.name}</TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
export default NavBar;
