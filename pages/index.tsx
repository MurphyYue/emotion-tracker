import Home from "@/components/home";
import Chat from "@/components/chatpage";
import { useContext } from "react";
import { GlobalContext } from "@/context"

export default function Page() {
  const { activeTab } = useContext(GlobalContext)
  console.log(activeTab)
  return (
    <>
    {activeTab === "home" && <Home />}
    {activeTab === "chat" && <Chat />}
    </>
  );
}